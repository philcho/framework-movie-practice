import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import './app.css';
import './data/exampleMovieList';
import AddMovieForm from './AddMovieForm';
import SearchForm from './SearchForm';
import ListToggleNav from './ListToggleNav';
import MovieList from './MovieList';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      showWatchedList: true
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleListToggle = this.handleListToggle.bind(this);
    this.handleWatchedChange = this.handleWatchedChange.bind(this);
  }

  getAllMovies() {
    // console.log('inside getAllMovies');
    $.ajax({
      url: 'http://localhost:4568',
      success: function(data) {
        console.log('getAllMovies Success!', data);
        this.setState({ movies: data });
      }.bind(this)
    });
  }

  handleAddMovie(title) {
    if (title) {
      $.ajax({
        method: 'POST',
        url: 'http://localhost:4568',
        data: { movie: title },
        success: function(data) {
          console.log('handleAddMovie Success!', data);
          this.getAllMovies();
        }.bind(this)
      });
    }
  }

  handleSearchQuery(query) {
    let searchQuery = query.toLowerCase();

    if (searchQuery === null) {
      this.setState({ movies: window.movies });
    }

    let matches = [];

    window.movies.forEach(function(movie) {
      let title = movie.title.toLowerCase();
      if (title.includes(searchQuery)) {
        matches.push(movie);
      }
    });

    this.setState({ movies: matches });
  }

  handleListToggle(selectedWatched) {
    this.setState({ showWatchedList: selectedWatched });
  }

  handleWatchedChange(title, isWatched) {
    console.log('inside handleWatchedChange', title, isWatched);
    // Update DB
    // re-render list
  }

  render() {
    const appTitle = (
      <h3>Movies List</h3>
    );

    return (
      <Grid className="App">
        <Row>
          <Col xs={4}>
            <Panel header={appTitle}>
              <AddMovieForm handleAddMovie={this.handleAddMovie} />
              <SearchForm handleSearchQuery={this.handleSearchQuery} />
              <ListToggleNav handleListToggle={this.handleListToggle} />
              <MovieList movies={this.state.movies} showWatchedList={this.state.showWatchedList} handleWatchedChange={this.handleWatchedChange} />
              {this.state.movies.length === 0 ? 'Sorry, no results' : ''}
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }

  componentDidMount() {
    this.getAllMovies();
  }
}

export default App;
