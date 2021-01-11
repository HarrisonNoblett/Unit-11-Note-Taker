// Dependencies
var express = require("express");

//Creating the express server-----------------------------------------
var app = express();

const apiRoutes = require("./apiRoutes")
const htmlRoutes = require("./htmlRoutes")

//Initial listening port----------------------------------------------
var PORT = process.env.PORT || 3000;

//Gathering pursuing data---------------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Using the Route files-----------------------------------------------
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

//Starting the server------------------------------------------------
app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
})
