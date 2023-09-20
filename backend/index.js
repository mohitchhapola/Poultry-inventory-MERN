const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");


const app =  express()
const port = process.env.PORT || 5000;

//connect to mongodb and start server
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
      app.listen(port,()=>{
        console.log(`Server is running on ${port}`);
      })
      console.log("connected to database")
    })
    .catch((err)=>console.log(err))





// const http = require('http');
 
// const hostname = '127.0.0.1';
 
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
 
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });