const express  = require("express");

const app = express();

const passport = require('../src/configs/passport');


const {register,login} = require("../src/controllers/auth.controller");

const ProductController = require("../src/controllers/product.controller");

app.use(express.json());

app.post("/register",register);

app.post("/login",login);

app.use("/products",ProductController);

app.use(passport.initialize());

passport.serializeUser(function ({ user, token }, done) {
    done(null, { user, token });
  });
  passport.deserializeUser(function (user, done) {
    done(err, user);
  });

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: '/auth/google/failure'
    }),
    function (req, res) {
        return res.status(201).json({ user: req.user.user, token: req.user.token });
    }
);

app.get("/auth/google/failure", function (req, res) {
    return res.send("Something went wrong");
  });

module.exports = app;