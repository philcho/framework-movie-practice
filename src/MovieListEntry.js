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
    let watchBtn;
    if(this.state.isWatched) {
      watchBtn = (<Button bsSize="xs" bsStyle="success" className="pull-right" onClick={this.handleButtonClick}>Watched</Button>);
    } else {
      watchBtn = (<Button bsSize="xs" bsStyle="primary" className="pull-right" onClick={this.handleButtonClick}>To Watch</Button>);
    }

    return (
      <ListGroupItem>
        {watchBtn}
        {this.props.movie.title} 
      </ListGroupItem>
    );
  }
}