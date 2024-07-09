const { pool } = require("../../config/dbConfig");
const passport = require('passport');


const autoLogin = (req, res, next) => {
  const authToken = req.cookies.auth_token;
  if (authToken) {
    passport.deserializeUser(authToken, (err, user) => {
      if (err) {
        console.error(err);
        return next();
      }
      if (user) {
        req.user = user;
        req.isAuthenticated = () => true;
      } else {
        res.clearCookie('auth_token');
      }
      next();
    });
  } else {
    next();
  }
};


module.exports = autoLogin;

module.exports = autoLogin;