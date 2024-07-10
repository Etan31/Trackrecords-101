require('dotenv').config(); 

const express = require('express');
const http = require('http');
const app = express();  
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const path = require('path');
const { pool } = require("./dbConfig");
const autoLogin = require('../src/middlewares/autoLogin');
const initializePassport = require("./passportConfig");

// const memoryStore = new session.MemoryStore();

initializePassport(passport);

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PgSession = require('connect-pg-simple')(session);
const store = new PgSession({
  pool: pool,
  tableName: process.env.DB_SESSION // table name to store sessions
});

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  store: store,
  cookie: {
    secure: false, // set to true if you're using HTTPS
    maxAge: 5184000 // 90 days
  }
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(autoLogin);

require('./auth');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    req.user = req.session.passport.user;
    next();
  } else {
    res.sendStatus(401);
  }
}

//to automate logging in if the user is authenticated(has logged in already)
app.use(async (req, res, next) => {
  if (req.session && req.session.passport && req.session.passport.user) {
    // User is already logged in, authenticate them
    const user = req.session.passport.user;
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      next();
    });
  } else {
    next();
  }
});


app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/dashboard');
  } else {
    res.render('../login', { loggedIn: false });
  }
});


//TODO: this name should match the givenName of the logged in user.  
app.get('/dashboard', isLoggedIn, (req, res) => {
    let name = 'Tristan';
    
    res.render('dashboard', {name: name, isLoggedIn: true});
});

app.get('/accounts', isLoggedIn, (req, res) => {
    let userData =  req.user;
    console.log("user:" +  req.user );

    const profile = {
        displayName: userData.displayName,
        email: userData.emails[0].value,
        profilePicture: userData.photos[0].value,
    }
    res.render('accounts.ejs' , {profile})
})

// Google OAuth routes
app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['email', 'profile'],
    })
);

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/auth/protected',
        failureRedirect: '/auth/google/failure',
    })
);

app.get('/auth/google/failure', (req, res) => {
    res.send('Something went wrong!');
});
app.get('/auth/protected', isLoggedIn, async (req, res) => {
    console.log("User info: ", req.user);
    let id = req.user.id;
    let email = req.user.email;
    let fullname = req.user.displayName;
    let name = req.user.name.givenName;
    let profilePic = req.user.photos[0].value;
    const user_type = 'user'

    try {
        const existsQuery =  `SELECT 1 FROM users WHERE id = $1`;
        const existsResult = await pool.query(existsQuery, [id]);

        // This will check if the user is already existed on the database
        if(existsResult || existsResult.row || existsResult.row.length > 0) {
            console.log(`The user: ${id} already existed`);
            res.render('dashboard', {name: name, isLoggedIn: true});
            return;
        } else {
            res.cookie('auth_token', req.user.id, {
                httpOnly:true,
                secure:false,
                maxAge: 5184000
            })
            
            //for inserting profile info to database
            const query = `INSERT INTO users (id, email, fullname, display_name, profile_picture, user_type)
            VALUES ($1, $2, $3, $4, $5, $6)`
            const values = [ id, email, fullname, name, profilePic, user_type];

            const result = await pool.query(query, values);
            res.render('dashboard', { name: name , isLoggedIn: true});
        }
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json('Internal server error');
    }
});

app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    store.destroy(req.sessionID, (err) => {
      if(err) {
        console.error(err);
      }
    });
    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      res.redirect('/');
    });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
