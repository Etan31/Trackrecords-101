const { pool } = require("../../config/dbConfig");

const autoLogin = (req, res, next) => {
  const authToken = req.cookies.auth_token;
  if (authToken) {
    pool.query('SELECT * FROM users WHERE id = $1', [authToken], (err, result) => {
      if (err) {
        console.error(err);
        return next();
      }
      if (result.rows.length > 0) {
        req.user = result.rows[0];
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