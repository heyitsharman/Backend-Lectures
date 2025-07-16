const express = require('express');
const app = express();
const PORT = 4000;
const {genericMiddleware,pathSpecific} = require('./middleware/practice');
// app.use((req,res,next)=>{
//     console.log('generic middleware');
//     next();
// })

app.use('/',genericMiddleware);

// path specific middleware : this will run for only those API req which starts with /user
// app.use("/user",(req,res,next)=>{
//     console.log("path specific middleware");
//     next();
// })

app.use('/user',pathSpecific);
// apis /routes 
function verifyUser(req,res,next){ 
    console.log("user verified");
    next();
}



// app.get('/', (req, res) => {
//     console.log("home page");
//     res.json({ "message": "server is live" });
// });

app.get('/', verifyUser,(req, res) => {
    console.log("home page");
    res.json({ "message": "server is live" });
});


app.listen(PORT,()=>{
    console.log(`server is live on port ${PORT}`);
})

