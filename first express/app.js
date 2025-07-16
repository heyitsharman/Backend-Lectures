const fs = require('fs');
const path =require('path');
const express =  require('express');  //require express package
const app = express();  //app is object

app.use(express.urlencoded({extended:'false'}));

//get req is default kind of req when u enter a url on browser

// app.get('/',function (req,res){
//     res.send('<h1>Hello World !</h1>');
// })

// Inputing data through user and storing data plus displaying it
app.get('/',function(req,res){
    res.send('<form action="/user-store" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>');
})
app.get('/currentTime', function(req,res){
    res.send('<h2>' + new Date().toISOString() + '</h2>');
});

app.post('/user-store',function(req,res){
   const userName =  req.body.username;
   const filePath = path.join(__dirname, 'data','users.json');
   const fileData = fs.readFileSync(filePath);
   const existingUsers = JSON.parse(fileData);
   existingUsers.push(userName);
   fs.writeFileSync(filePath, JSON.stringify(existingUsers));
   res.send('<h1>username bhagya</h1>')
});


app.get('/users',function(req,res){
    const filePath = path.join(__dirname, 'data','users.json');
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    res.send(existingUsers);
})

app.listen(3000);






