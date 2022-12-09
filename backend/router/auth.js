import passport from "passport"
import User from "../models/user.js"
import verify from "../middlewares/verfyToken.js"
import express from "express"
import sessions from "express-session"
import {signin, signup, signout} from "../controllers/auth.js"
import { googleAuth, githubAuth } from "../controllers/autologin.js"

const router = express.Router()


router.use(passport.initialize())
router.use(sessions({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
}))
router.use(passport.session());
googleAuth(passport)
githubAuth(passport)


passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id)
});

passport.deserializeUser(function(id, done) {
  User.findById(id).then((user) => {
    done(null, user)
  })
});



 // google authentication

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}))

router.get(
  "/google/blog",
  passport.authenticate("google", { failureRedirect: "/signin" }),
  function (req, res) {
    res.status(200).json("google user authenticated");
  }
);


router.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get(
  "/auth/github/blog",
  passport.authenticate("github", { failureRedirect: "/signin" }),
  function (req, res) {
    res.json("succesfully authenticated user");
  }
);

router.post("/auth/signup", signup)

router.post("/auth/signin", signin)

router.get('/signout',verify,  signout)

export default router;