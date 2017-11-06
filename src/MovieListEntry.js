import React, { Component } from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';

export default class MovieListEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isWatched: false
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ isWatched: !this.state.isWatched })
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

    return (
      <ListGroupItem>
        <Button bsSize="xs" bsStyle={btn.style} className="pull-right" onClick={this.handleButtonClick}>{btn.label}</Button>
        {this.props.movie.title} 
      </ListGroupItem>
    );
  }
}