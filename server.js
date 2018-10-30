// grab our dependencies
var express = require("express");
var mysql = require("mysql");
//also installed express handlebars
// create the app to call on 
var app = express();

//set up a port server number
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8090;

//this is where we call on our mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
  });

  // Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
  