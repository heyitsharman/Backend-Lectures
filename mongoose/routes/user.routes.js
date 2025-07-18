const express = require('express');
const router = express.Router();

Router.post("/create",async(req,res)=>{

});
Router.get('/bulk/upload',async(req,res)=>{
  try{
    await bulkUserUpload();
    res.status(200).json({message: "users uploaded successfully"});
  }
  catch(error){
    res.status(500).json({message: error.message});
  }

})

module.exports = router;