/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: VISHALKUMAR RANA 
*  Student ID: 151059219 
*  Date: 17TH MAY, 2023
*
*  Online (Cyclic) URL: https://zealous-red-cockroach.cyclic.app
*
********************************************************************************/ 


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
app.get("/", (req, res) => {
    res.write("Vishalkumar Rana - 151059219\n");
    res.write("My favorite movie is The Lion King");
    res.end();
});
app.listen(HTTP_PORT);
