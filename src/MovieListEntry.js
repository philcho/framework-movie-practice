import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

export default class MovieListEntry extends Component {
  render() {
    return (
      <ListGroupItem>{this.props.movie.title}</ListGroupItem>
    );
  }
}