const LocalStrategy = require("passport-local").Strategy;
const { pool } = require("./dbConfig");
const bcrypt = require("bcrypt");

function initialize(passport) {
  console.log("Initialized");

  const authenticateUser = (user, password, done) => {
    const query = `SELECT * FROM users WHERE displayName = $1 OR email = $1`;
    pool.query(query, [user], (err, results) => {
      if (err) {
        return done(err);
      }

      if (results.rows.length > 0) {
        const user = results.rows[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Password is incorrect" });
          }
        });
      } else {
        return done(null, false, {
          message: "No user with that username or email address",
        });
      }
    });
  };

  passport.use(
    "local-login",
    new LocalStrategy(
      { usernameField: "displayName", passwordField: "password" },
      (user, password, done) => {
        authenticateUser(user, password, done);
      }
    )
  );

  passport.serializeUser((user, done) => {
    try {
      done(null, user); 
      // console.log("Serialized user:", user);
    } catch (error) {
      console.error("Error during serialization:", error);
      done(error, null);
    }
  });

   passport.deserializeUser((id, done) => {
   pool.query(
      `SELECT id, display_name, fullname, email, profile_picture FROM users WHERE id = $1`,
      [id],
      (err, results) => {
         if (err) {
         console.log("err")
         return done(err);
         }

         const user = results.rows[0];
         return done(null, user); // Returning the entire user object
      }
   );
   });
}

module.exports = initialize;