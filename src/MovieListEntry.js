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
    console.log('handleCheckboxClick', event.target.value);
    let isWatched = (event.target.value === 'on') ? 1 : 0;
    this.props.handleWatchedChange(this.props.movie.title, isWatched);

    // this.setState({ isWatched: !this.state.isWatched });

    // for (let i = 0; i < this.state.movies.length; i++) {
    //   if (this.state.movies[i].title === this.props.movie.title) {
    //     this.state.movies[i].isWatched = !this.state.isWatched;
    //   }
    // }
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

    let itemStyle = {};
    if (this.state.isWatched === this.props.showWatchedList) {
      itemStyle = { 'display': 'block' };
    } else {
      itemStyle = { 'display': 'none' };
    }

    return (
      <ListGroupItem style={itemStyle}>
        {this.props.movie.title} 
        <ul>
          <li><label>Year:</label> 1995</li>
          <li><label>Runtime:</label> 107 minutes</li>
          <li><label>Metascore:</label> 46</li>
          <li><label>imdbRating:</label> 6.2</li>
          <li><label>Watched:</label> <Checkbox value='on' onClick={this.handleCheckboxClick} /></li>
        </ul>
      </ListGroupItem>
    );
  }
}