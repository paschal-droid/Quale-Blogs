import passportGoogleAuth from "passport-google-oauth20";
import passportGithub from "passport-github2";
import passport from "passport";
import dotenv from "dotenv";
// import passport from 'passport'
import User from "../models/user.js";
dotenv.config();

var GoogleStrategy = passportGoogleAuth.Strategy;
var GitHubStrategy = passportGithub.Strategy;

export const googleAuth = function (port) {
  port.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: "http://localhost:5000/google/blog",
      },
      function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    )
  );
};

export const githubAuth = function (port) {
  port.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT,
        clientSecret: process.env.GITHUB_SECRET,
        callbackURL: "http://localhost:5000/auth/github/blog",
      },
      function (accessToken, refreshToken, profile, done) {
        User.findOrCreate({ githubId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    )
  );
};

