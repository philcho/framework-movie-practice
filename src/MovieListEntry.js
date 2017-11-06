import React, { Component } from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';

export default class MovieListEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isWatched: this.props.movie.isWatched
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ isWatched: !this.state.isWatched })
    // TODO Change exampleMovieList.js
    for (let i = 0; i < window.movies.length; i++) {
      if (window.movies[i].title === this.props.movie.title) {
        window.movies[i].isWatched = !this.state.isWatched;
      }
    }
  }

  render() {
    let btn = {};
    if(this.state.isWatched) {
      btn.style = 'success';
      btn.label = 'Watched'
    } else {
      btn.style = 'primary';
      btn.label = 'To Watch'
    }

    let btnStyle = {};
    if (this.state.isWatched === this.props.showWatchedList) {
      btnStyle = { 'display': 'block' };
    } else {
      btnStyle = { 'display': 'none' };
    }

    return (
      <ListGroupItem style={btnStyle}>
        <Button bsSize="xs" bsStyle={btn.style} className="pull-right" onClick={this.handleButtonClick}>{btn.label}</Button>
        {this.props.movie.title} 
      </ListGroupItem>
    );
  }
}