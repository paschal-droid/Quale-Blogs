import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import authRoute from "./router/auth.js"
import blogRoute from "./router/blog.js"
dotenv.config()
const app = express();


app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));




mongoose.connect("mongodb+srv://paschal-droid:necherempaschal@db.abbgn8a.mongodb.net/blogDB?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("BlogDB has connected successfully");
}).catch((err)=>{
    console.log(err);
})

app.use("/", authRoute)
app.use('/', blogRoute)


app.listen(5000, (req,res)=>{
    console.log("server is currently running on port 5000");
})