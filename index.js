<<<<<<< HEAD
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('davra.com node microservice!');
=======
const express = require("express");
const app = express();

app.get("/testing", function (req, res) {
  res.send("davra.com node microservice!");
>>>>>>> 9c440b9f97391a11914d7c460ff5ae7a3fb15ca4
});

const SERVER_PORT = 8080;
app.listen(SERVER_PORT, function () {
<<<<<<< HEAD
  console.log('davra.com node microservice listening on port ' + SERVER_PORT + '!');
=======
  console.log(
    "davra.com node microservice listening on port " + SERVER_PORT + "!"
  );
>>>>>>> 9c440b9f97391a11914d7c460ff5ae7a3fb15ca4
});
