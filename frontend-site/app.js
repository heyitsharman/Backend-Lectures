const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view-engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.get('/', function(req,res){
    res.render('index.ejs');
})

app.get('/restaurants',function(req,res){
     const filePath = path.join(__dirname, 'data', 'restaurants.json');
    
   const fileData =  fs.readFileSync(filePath);
   const storedRestaurant = JSON.parse(fileData);
    res.render('restaurants.ejs', {x : storedRestaurant.length, restaurants :storedRestaurant});
})
app.get('/recommend',function(req,res){
    res.render('recommend.ejs');
})
app.get('/confirm',function(req,res){
    res.render('confirm.ejs');
})
app.get('/about',function(req,res){
    res.render('about.ejs');
})

app.post('/recommend',function(req,res){
    const restaurant = req.body;
    const filePath = path.join(__dirname, 'data', 'restaurants.json');
    
   const fileData =  fs.readFileSync(filePath);
   const storedRestaurant = JSON.parse(fileData);
   storedRestaurant.push(restaurant);
   fs.writeFileSync(filePath, JSON.stringify(storedRestaurant));

   res.redirect('/confirm');
})
app.listen(3000);