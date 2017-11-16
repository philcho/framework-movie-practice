import React, { Component } from 'react';
import { ListGroupItem, Checkbox } from 'react-bootstrap';
import $ from 'jquery';
import config from './config.js';

export default class MovieListEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isWatched: !!this.props.movie.isWatched,
      showDetails: false,
      details: {}
    }

    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleCheckboxClick(event) {
    let isWatched = (event.target.checked) ? 1 : 0;
    this.props.handleWatchedChange(this.props.movie.title, isWatched);
  }

  handleTitleClick(event){
    this.setState({ 'showDetails': !this.state.showDetails });
  }

  getMovieDetails(title) {
    let urlTitle = encodeURI(title);

    $.ajax({
      url: `https://api.themoviedb.org/3/search/movie?api_key=${config.api_key}&language=en-US&query=${urlTitle}&page=1&include_adult=false`,
      success: function(data) {
        this.setState({ details: data.results[0] })
      }.bind(this)
    });
  }

  render() {
    let itemStyle = {};
    if (this.state.isWatched === this.props.showWatchedList) {
      itemStyle = { 'display': 'block' };
    } else {
      itemStyle = { 'display': 'none' };
    }
    console.log(itemStyle);

    let checkboxState = '';
    if (this.state.isWatched) {
      checkboxState = 'on';
    }

    let detailsStyle = (this.state.showDetails) ? { 'display': 'block' } : { 'display': 'none' };

    return (
      <ListGroupItem style={itemStyle}>
        <p onClick={this.handleTitleClick}>{this.props.movie.title}</p>
        <ul style={detailsStyle}>
          <li><label>Year:</label> {this.state.details.release_date}</li>
          <li><label>Overview:</label> {this.state.details.overview}</li>
          <li><label>Watched:</label> <Checkbox checked={checkboxState} onChange={this.handleCheckboxClick} /></li>
        </ul>
      </ListGroupItem>
    );
  }

  componentDidMount() {
    this.getMovieDetails(this.props.movie.title);
  }
}