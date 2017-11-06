import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

export default class AddMovieForm extends Component {
  constructor(props) {
    super(props);

    // Using controlled components to handle form submissions:
    // https://reactjs.org/docs/forms.html
    this.state = {
      inputValue: ''
    }

    this.handleAddMovie = this.props.handleAddMovie.bind(this);
    // Even bind functions we're not passing down via props. Otherwise 'this' becomes undefined during event handling. 
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    this.handleAddMovie(this.state.inputValue);
    this.setState({ inputValue: ''});
    event.preventDefault();
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormControl xs={6} type="text" placeholder="Add movie title here" value={this.state.inputValue} onChange={this.handleInputChange} />
        </FormGroup>
        {' '}
        <Button type="submit" bsStyle="success">Add</Button>
      </Form>   
    );
  }
}