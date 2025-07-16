const express = require('express');
const app = express();
const fs = require("fs");
// const port = require('port');

const {formatDate,dateConverter} = require("./helper/date-converter");
let date = formatDate(new Date());
let localDate = dateConverter(new Date());


// console.log(localDate);

// async function
// fs.writeFile("./text.txt","hello world", (err)=>{
//     console.log('error');
//     console.log(err);
// })

// sync function   //line by line runs
// console.log(1);
// const result = fs.writeFileSync("./text2.txt","heyy");
// console.log(result);
// console.log(2);

//async
// fs.readFile('./text.txt',"utf-8",(err,data)=>{
//     console.log(data);
// })


//sync
// const data = fs.readFileSync('./text2.txt',"utf-8");
// console.log(data);

// async  function to update file
// fs.appendFile("./text.txt","\n Appending data in text.txt .... ",(err)=>{
//     console.log("donee");
// });


// fs.appendFileSync("./text.txt", "\n this is sample data appended into file using sync function");

// to delete  file 
fs.unlink("./text2.txt",(err)=>{
    console.log(err);
    console.log("file deleted");
});


