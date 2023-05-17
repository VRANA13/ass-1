var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    var i;
i = 10;
    while(i === 10){
    res.send("Hello World!");
    res.send("Vishalkumar Rana - 151059219");
    res.send("My favorite movie is The Lion King");
    }
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);