//C:\Users\shivi\OneDrive\Documents\learnjs\sum.js
// const {sum} = require("./expsum");
// const {tri} = require("./expsum");

// let a = sum(10,200);
// // let t = "";
// console.log(`The sum is ${a} , ${tri(10,20,30)}`);
// const http = require("http");


// const server = http.createServer(function (req,res) {
//     req.writeHead(200);
//     // req.
//     res.end("Well! hello there 1");
// });

// server.listen(8000);

// const fs= require("fs");
// fs.watch("shivam.txt",()=>
//     console.log("file updated")
//     );


// fs.readFile("shivam.txt", (err,data)=>{
//     if(err)
//     {
//         console.log("error occure"+err)
//     }
//     else
//     console.log("Data : "+ data.toString());
// })

// console.log("Watcher is here guys");



const express = require("express");
const cors = require("cors");
const app = express();

// const middfun = (req,res,next) =>{
//     console.log("my name is anthony gonjalish");
//     next();
// };

app.use(cors());

app.get("/api",(req,res)=>{
    // res.send("this is a statement :)");
    res.json({
        users: [{
            name: "shivam garg",
            age: 21,
        },
        {
            name:"koka",
            age: 3,
        },
    ],
    
    });
});

app.listen(8000, ()=> console.log("the server is running"));
