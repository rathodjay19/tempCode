const express = require('express');
// const path = require("path");
const cors = require("cors");


const app = express();


// Middleware
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// import routes



// Routes


// app.use("/order")



module.exports = app;




// npm init -y
// node --version
// npm install express body-parser nodemon
// npm init -y

// npm i cors

// npm i dotenv
// node server.js




