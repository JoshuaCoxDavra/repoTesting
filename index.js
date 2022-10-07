const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('davra.com node microservice!');
});

const SERVER_PORT = 8080;
app.listen(SERVER_PORT, function () {
  console.log('davra.com node microservice listening on port ' + SERVER_PORT + '!');
});
