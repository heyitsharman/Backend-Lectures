const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
app.use(express.json());

app.get("/",function(req,res){

    // res.send("hello");
    const result = {
        name : 'HK',
        work : null
    }
    res.json(result);
})

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('ok');
})

app.listen(port, ()=>{
    console.log(`server running at port ${port}`);
});

// types of api get/post/patch
// req and res object 

