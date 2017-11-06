import React, { Component } from 'react';
import './data/exampleMovieList';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import MovieList from './MovieList';
import SearchForm from './SearchForm';
import AddMovieForm from './AddMovieForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: window.movies
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
  }

  handleAddMovie(title) {
    if (title !== '') {
      window.movies.push({ 'title': title });
      this.setState({ movies: window.movies });
    }
  }

  handleSearchQuery(query) {
    let searchQuery = query.toLowerCase();

    if (searchQuery === null) {
      return window.movies;
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
              <MovieList movies={this.state.movies} />
              {this.state.movies.length === 0 ? 'Sorry, no results' : ''}
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;