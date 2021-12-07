require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const { uuid } = require("uuidv4");

const newToken = require('../controllers/auth.controller');

const User = require("../models/users.model");

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    userProfileURL: "https://**www**.googleapis.com/oauth2/v3/userinfo",
    callbackURL: "http://localhost:2345/auth/google/callback",
    passReqToCallback   : true,
  },
  async function(request, accessToken, refreshToken, profile, done) {
    let user = await User.findOne({ email: profile?._json?.email })
    .lean()
    .exec();

  if (!user) {
    user = await User.create({
      email: profile?._json?.email,
      password: uuid(),
    });
  }
  const token = newToken(user);
  return done(null, { user, token });
  }
));

module.exports = passport;