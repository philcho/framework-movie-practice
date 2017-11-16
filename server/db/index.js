const mysql = require('mysql');
const createTables = require('./config');
// const models = require('./models');
const Promise = require('bluebird');
const database = 'movies';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hackreactor84!',
  database: 'movies'
});

// const db = Promise.promisifyAll(connection, {multiArgs: true });

// db.connectAsync()
//   .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
//   .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
//   .then(() => db.queryAsync(`USE ${database}`))
//   .then(() => createTables(db));

var getAllMovies = function(callback) {
  connection.query(`SELECT * FROM movies`, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

var saveMovie = function(movie, callback) {
  connection.query(`INSERT INTO movies (title, isWatched) VALUES ('${movie}', 0);`, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var changeWatchedState = function(movie, isWatched, callback) {
  console.log('inside changeWatchedState', movie, isWatched);
  connection.query(`UPDATE movies SET isWatched = ${isWatched} WHERE title = '${movie}';`, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, err);
    }
  });
};

module.exports.getAllMovies = getAllMovies;
module.exports.saveMovie = saveMovie;
module.exports.changeWatchedState = changeWatchedState;