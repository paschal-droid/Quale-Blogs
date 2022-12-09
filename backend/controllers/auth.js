import User from "../models/user.js";
import jwt from 'jsonwebtoken';
import passport from "passport";


export const signin = async (req,res)=>{
    const {username, password} = req.body;
      const newUser = new User({
          username,
          password
      })
      await req.login(newUser, (err)=>{
          if(err) {
            res.status(500).json("Incorrect email or password")
          } else {
             passport.authenticate("local")(req,res, ()=>{
                const token = jwt.sign({id: newUser._id}, process.env.SECRET, {expiresIn: '1m'})
                res.status(200).json({message: "user logged in successfully", token})
                })
             }
          })
}

export const signup = (req,res)=>{
    const  {username, fullname, password} = req.body;
    User.register(new User({username, fullname,}), password, function(err){
            if(err){
                res.status(500).json(err)
            } else {
                passport.authenticate("local")(req,res, function (){
                  const token = jwt.sign({id: User._id}, process.env.SECRET, {expiresIn: '1m'})
                  res.status(200).json({message: "successfully registered user", token})
                })
            }
    })
}


export const signout = (req,res)=>{
    req.user = null
    req.session.destroy()
    req.logout();
    res.status(200).json("you've logged out succesfully")
    console.log(req.user);
}

