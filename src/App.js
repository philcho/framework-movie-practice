import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import './app.css';
import './data/exampleMovieList';
import AddMovieForm from './AddMovieForm';
import SearchForm from './SearchForm';
import ListToggleNav from './ListToggleNav';
import MovieList from './MovieList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: window.movies,
      showWatchedList: true
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleListToggle = this.handleListToggle.bind(this);
  }

  handleAddMovie(title) {
    if (title !== '') {
      window.movies.push({ 'title': title, 'isWatched': false });
      this.setState({ movies: window.movies });
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
              <MovieList movies={this.state.movies} showWatchedList={this.state.showWatchedList} />
              {this.state.movies.length === 0 ? 'Sorry, no results' : ''}
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
