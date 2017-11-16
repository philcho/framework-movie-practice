import React, { Component } from 'react';
import { ListGroupItem, Checkbox } from 'react-bootstrap';

export default class MovieListEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isWatched: !!this.props.movie.isWatched,
      showDetails: false
    }

    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleCheckboxClick(event) {
    let isWatched = (event.target.checked) ? 1 : 0;
    this.props.handleWatchedChange(this.props.movie.title, isWatched);
  }

  handleTitleClick(event){
    console.log('handleTitleClick', event.target);
    this.setState({ 'showDetails': !this.state.showDetails });
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

    let detailsStyle = (this.state.showDetails) ? { 'display': 'block' } : { 'display': 'none' };

    return (
      <ListGroupItem styles={itemStyle}>
        <p onClick={this.handleTitleClick}>{this.props.movie.title}</p>
        <ul style={detailsStyle}>
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