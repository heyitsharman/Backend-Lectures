const User = require("../models/user.schema");
const dummyUsers =[
    {
        name: "user1",
        email : "user1@gmail.com",
        age : 18,
        DOB : new Date("12/07/2004")
    },
    {
        name: "user2",
        email : "user2@gmail.com",
        age : 20,
        DOB : new Date("12/07/2003")
    },
    {
        name: "user3",
        email : "user3@gmail.com",
        age : 22,
        DOB : new Date("9/07/2003")
    }
]
async function bulkUserUpload(){

    try{
        let users = await User.insertMany(dummyUsers);
        console.log("users uploades to DB");
    }
    catch(error){
        console.log(error.message);
        throw new Error(error.message); //this will forward error or return a error
    }  

}

module.exports = bulkUserUpload;