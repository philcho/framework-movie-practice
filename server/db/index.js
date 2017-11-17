const Sequelize = require('sequelize');
const sequelize = new Sequelize('movies', 'root', 'Hackreactor84!', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been estalished successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database', err);
  });

const Movie = sequelize.define('movie', {
    title: {
      type: Sequelize.STRING
    },
    isWatched: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    timestamps: false
  }
);

var getAllMovies = function(callback) {
  Movie
    .findAll({
      attributes: ['title', 'isWatched']
    })
    .then(results => {
      // console.log('getAllMovies success', results);
      callback(null, results);
    })
    .catch(err => {
      // console.log('getAllMovies error', err);
      callback(err, null);
    });
}

var saveMovie = function(movie, callback) {
  Movie.create({ title: movie, isWatched: 0 }, { fields: [ 'title', 'isWatched'] })
    .then(results => {
      // console.log('saveMovie success', movies);
      callback(null, results);
    })
    .catch(err => {
      // console.log('saveMovie error', err);
      callback(err, null);
    });
};

var changeWatchedState = function(movie, isWatched, callback) {
  Movie
    .update(
      { isWatched: isWatched }, 
      { where: 
        { title: movie }
      } 
    )
    .then(results => {
      Movie.findAll({
        attributes: ['title', 'isWatched']
      })
      .then(data => {
        results = data;
      });
    })
    .then(results => {
      console.log('changeWatchedState success', results);
      callback(null, results);
    })
    .catch(err => {
      console.log('changeWatchedState error', err);
      callback(err, null);
    });
};

module.exports.getAllMovies = getAllMovies;
module.exports.saveMovie = saveMovie;
module.exports.changeWatchedState = changeWatchedState;