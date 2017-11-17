const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/', function(req, res) {
  console.log('GET request');
  db.getAllMovies(function(err, results, fields) {
    // if (err) {
    //   res.status(404).send(err);
    // }
    res.status(200).send(results);
  });
});

app.post('/', function(req, res) {
  console.log('POST request', req.body);
  let movie = req.body.movie;
  db.saveMovie(movie, function(err, results, fields) {
    res.status(201).send(results);
  });
});

app.post('/update', function(req, res) {
  console.log('/update request', req.body);
  db.changeWatchedState(req.body.movie, req.body.isWatched, function(err, results, fields) {
    res.status(201).send(results);
  });
});

module.exports = app;