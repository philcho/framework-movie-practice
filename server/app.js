const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res) {
  db.getAllMovies(function(err, results, fields) {
    // if (err) {
    //   res.status(404).send(err);
    // }
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(results);
  });
});

app.post('/', function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let movie = req.body.movie;
  db.saveMovie(movie, function(err, results, fields) {
    res.status(200).send(results);
  });
});

module.exports = app;