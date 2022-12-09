import jwt from 'jsonwebtoken';
import User from '../models/user.js'

export default (req, res, next) => {
   const { authorization } = req.headers;
   if(authorization) {
      const token = authorization.split(" ")[1]
       jwt.verify(token, process.env.SECRET, (err, payload) => {
         if(err) {
            return res.status(403).json("Token is not valid")
         }
         const {id} = payload;
         const user =  User.findById(id)
         req.user = user;
         next()
      })
   } else {
      res.status(401).json('Not Authenticated')
   }
   // const token = authorization.replace('Bearer ', '')
   // jwt.verify(token, process.env.SECRET, async (err, payload)=> {
   //     err && res.status(422).send({error: err.})
   //     const {id} = payload;
   //      const user = await User.findById(id)
   //      req.user = user;
   //      next();
   // })
   
} 