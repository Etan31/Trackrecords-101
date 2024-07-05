require('dotenv').config(); 

const express = require('express');
const http = require('http');
const app = express();
const session = require('express-session');
const passport = require('passport');
const path = require('path');

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
    req.user = req.session.passport.user; // or however you store the user data
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
    res.render('dashboard', { name: name, loggedIn: true});
});

app.get('/accounts', isLoggedIn, (req, res) => {
    let userData =  req.user;
    console.log("user:" +  req.user );

    const profile = {
        displayName: userData.displayName,
        email: userData.emails[0].value,
        profilePicture: userData.photos[0].value,
    }
    res.render('accounts.ejs' , {profile, loggedIn: true})
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

app.get('/auth/protected', isLoggedIn, (req, res) => {
    let name = req.user.displayName;
    res.render('dashboard', { name: name });
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.render('../login',{ loggedIn: false });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
