import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import findOrCreate from "mongoose-findorcreate"



const userSchema = new mongoose.Schema({
    fullname: String,
    username: String,
    password: String,
}, {timestamps: true}, {minimize: false})

userSchema.plugin(passportLocalMongoose, {saltlen: 64});
userSchema.plugin(findOrCreate)
const User = mongoose.model("User", userSchema)

export default User