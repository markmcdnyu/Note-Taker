// need to require Express for this project 
var express = require("express");

// Then, for node to know we are creating an express server
var app = express();

//Set the PORT needed to use
var PORT = process.env.PORT || 8080;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import the webiste's style
app.use(express.static("Develop/public"));








app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});