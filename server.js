// Dependencies
var express = require("express");

//Creating the express server
var app = express();

//initial listening port
var PORT = process.env.PORT || 8080;

//Gathering pursuing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//requiring the Route files
require("./apiRoutes")(app);
require("./htmlRoutes")(app);

//Starting the server
app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
})