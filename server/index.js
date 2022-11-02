import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js"

console.log("script running");

const app=express()
app.use(cors())
app.use(bodyParser.json({limit:"30mb",extended:"true"}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}))

const MONGO_URL="mongodb+srv://mongodb:mongodb123@memories.8fepvcx.mongodb.net/memories?retryWrites=true&w=majority"

const PORT=process.env.PORT||5000

app.listen(PORT,)

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("open", function (err) {
  if (!err) {
    console.log("Database Connected");
  } else {
    console.log("This is error", err);
  }
});


app.get('/',(req,res)=>{
    res.send("Server working")
})
app.use('/posts',postRoutes)

