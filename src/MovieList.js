import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import MovieListEntry from './MovieListEntry';

export default class MovieList extends Component {
  render() {
    const entries = [];
    for (let i = 0; i < this.props.movies.length; i++) {
      entries.push(<MovieListEntry movie={this.props.movies[i]} key={i} />);
    }

    return (
      <ListGroup>
        {entries}
      </ListGroup>
    );
  }
}
