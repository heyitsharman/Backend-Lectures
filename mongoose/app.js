// mongoose
// it provides connection to cluster
// provides easy queries for CRUD operations
// Provides structure to the collection 
// defining structure
// defining attribute types 
// put restriction on attribute value

require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 4000;
const connectDB = require("./db/connectDb");
const userSchema = require("./models/user.schema");
const bulkUserUpload = require("./db/seed");
// router
const userRouter = require("./routes/user.routes");
// making schema
// const userSchema = new mongoose.Schema({
//     name: 
//     {
//         type: String,
//         required: true,  //makes attribute compulsory
//         minLength: 3 ,  //name cant be less then 3 char
//         trim : true     //remove whitespaces
//     },
//     email:
//     {
//         type: String,
//         required: true,
//         unique: true   //an email only be used only 1 time
//     },
//     age:
//     {
//         type: Number,
//         min: 1,
//         max: 124
//     },
//     DOB :{
//         type : Date,

//     }

// })

//models
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const User = mongoose.model("user",userSchema);
app.get('/',(req,res)=>{
  res.send("chalgya server");
})


app.post('/', async (req,res)=>{
    try{
        const {name,email,age,DOB} = req.body;
        const user = await User.create({
            name: name,
            email : email,
            age : age,
            DOB : new Date(DOB)
        })
        res.status(201).json({user});
    } catch(error){
        res.status(400).json({message: error.message});
    }
});

app.use("/user",userRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
});

