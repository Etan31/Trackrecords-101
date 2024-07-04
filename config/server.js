const express = require("express");
const http = require("http");
const app = express();
const session = require("express-session");
const passport = require("passport");
const server = http.createServer(app);
const path = require('path');
const pg = require('pg');
const fs = require('fs');
const { pool } = require('./dbConfig');

// Set views directory and view engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

// api
require('./auth');


// your current directory is views

app.get('/', (req,res) => {
   res.render('../Login');
})

app.get('/dashboard', (req,res) => {
   let name = 'Tristan';
   res.render('./dashboard.ejs', {name: name});
})

function isLoggedIn (req, res, next) {
  req.user ? next () : res.sendStatus (401);
}

app.use (
  session ({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false},
  })
);

app.use (passport.initialize ());
app.use (passport.session ());
app.get (
  '/auth/google',
  passport.authenticate ('google', {
    scope: ['email', 'profile'],
  })
);

app.get (
  '/auth/google/callback',
  passport.authenticate ('google', {
    successRedirect: '/auth/protected',
    failureRedirect: '/auth/google/failure',
  })
);

app.get ('/auth/google/failure', (req, res) => {
  res.send ('Something went wrong!');
});

app.get ('/auth/protected', isLoggedIn, (req, res) => {
  let name = req.user.displayName;
  res.render('./dashboard.ejs', {name: name});
});

app.get('/logout', (req,res) => {
  req.session.destroy();
  res.render('../login');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));