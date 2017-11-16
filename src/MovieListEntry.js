import React, { Component } from 'react';
import { ListGroupItem, Checkbox } from 'react-bootstrap';

export default class MovieListEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isWatched: !!this.props.movie.isWatched
    }

    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
  }

  handleCheckboxClick(event) {
    console.log('handleCheckboxClick', event.target.checked);
    let isWatched = (event.target.checked) ? 1 : 0;
    this.props.handleWatchedChange(this.props.movie.title, isWatched);
  }

  render() {
    let itemStyle = {};
    if (this.state.isWatched === this.props.showWatchedList) {
      itemStyle = { 'display': 'block' };
    } else {
      itemStyle = { 'display': 'none' };
    }

    let checkboxState = '';
    if (this.state.isWatched) {
      checkboxState = 'on';
    }

    return (
      <ListGroupItem style={itemStyle}>
        {this.props.movie.title} 
        <ul>
          <li><label>Year:</label> 1995</li>
          <li><label>Runtime:</label> 107 minutes</li>
          <li><label>Metascore:</label> 46</li>
          <li><label>imdbRating:</label> 6.2</li>
          <li><label>Watched:</label> <Checkbox checked={checkboxState} onChange={this.handleCheckboxClick} /></li>
        </ul>
      </ListGroupItem>
    );
  }
}