// grab our dependencies
var express = require("express");
var burger = require("..models/burger.js");

//creating a route
app.get("/", function (req, res) {


    connection.query("SELECT * FROM  burger", [req.body.burger], function (err, result) {
    if (err) {
        throw err;
    }
    })

});

// Finally we send the user the HTML file we dynamically created.
//this si exporting everything
res.send(html);