const express = require('express');
const app = express();
const PORT = 4000;
require("dotenv").config();
const { MongoClient } = require("mongodb");
app.use(express.json());


const uri = process.env.DATABASE_URL;
if (!uri) {
  console.error(" DATABASE_URL not found in .env file");
  process.exit(1);
}
const client = new MongoClient(uri);
let userCollection;

async function connectToDB() {
  try {
    await client.connect();
    console.log("MongoDB connected");
    const db = client.db("G24");
    userCollection = db.collection("users");

    
    app.get('/', (req, res) => {
      res.send("Hello from server");
    });

    app.get('/users', async (req, res) => {
      try {
        const { name, email } = req.query;
        if (!name || !email) {
          return res.status(400).json({ message: "Name and email are required" });
        }
        const result = await userCollection.insertOne({ name, email });
        res.status(201).json({ result });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.post('/users', async(req,res)=>{
        try{
            const data = req.body;
            const result = userCollection.insertMany(data);
            res.status(201).json({result});
        }
        catch(error){
            res.status(404).json({message: error.message});
        }
    })

    app.delete('/users:id', async(req,res)=>{
        try{
            const {id} = req.params;
            const result = await userCollection.deleteOne({_id:id});
            res.status(203).json({result,message:"user deleted"});

        }
        catch(error){
            res.status(400).json({message:error.message});
        }
    })
  
    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(" MongoDB connection failed:", err);
    process.exit(1);
  }
}

// Start the app
connectToDB();
