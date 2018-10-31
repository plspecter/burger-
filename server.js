// grab our dependencies
var express = require("express");
var mysql = require("mysql");
//also installed express handlebars
// create the app to call on 
var app = express();

//set up a port server number
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8090;

//Set up express to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//grab handlebars
var handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars")

//grab mysql
var mysql = require("mysql");

//this is where we call on our mysql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) {
    console.log("connection error" + err.stack);
    return;
  }
  console.log("connection id" + connection.threadId)
})



//Data
var burgers = [
  { name: "Veggie Burger", price: 6, },
  { name: "Whopper", price: 5, },
  { name: "Bacon King", price: 8, },
];

//Routes
app.get("index.handlebars", function (req, res) {
  connection.query("SELECT * FROM burger_db", function (err, data) {
    if (err) {
      console.log("connection error" + err.stack);
      return;
    }
    console.log("connection id" + connection.threadId)
  });


  //the first page the server will load
  res.render("index.handlebars", { burgers: data })
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
