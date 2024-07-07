require('dotenv').config(); 

const express = require('express');
const http = require('http');
const app = express();
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const { pool } = require("./dbConfig");

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));

app.use(passport.initialize());
app.use(passport.session());

require('./auth');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    req.user = req.session.passport.user;
    next();
  } else {
    res.sendStatus(401);
  }
}


app.get('/', (req, res) => {
    res.render('../login', { loggedIn: false });
});

app.get('/dashboard', isLoggedIn, (req, res) => {
    let name = 'Tristan';
    console.log("user:" +  req.user );
    res.render('dashboard', { name: name,  isLoggedIn: false});
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
    let id = req.user.id;
    let email = req.user.emails[0].value;
    let fullname = req.user.displayName;
    let name = req.user.name.givenName;
    let profilePic = req.user.photos[0].value;
    const user_type = 'user'

    try {
        //for inserting profile info to database
        const query = `INSERT INTO users (id, email, fullname, display_name, profile_picture, user_type)
        VALUES ($1, $2, $3, $4, $5, $6)`
        const values = [ id, email, fullname, name, profilePic, user_type];

        const result = await pool.query(query, values);
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json('Internal server error');
    }
    
    res.render('dashboard', { name: name , isLoggedIn: true});
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.render('../login',{ loggedIn: false });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
