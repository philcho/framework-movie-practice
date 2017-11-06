import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    // Using controlled components to handle form submissions:
    // https://reactjs.org/docs/forms.html
    this.state = {
      inputValue: ''
    }

    this.handleSearchQuery = this.props.handleSearchQuery.bind(this);
    // Even bind functions we're not passing down via props. Otherwise 'this' becomes undefined during event handling. 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    this.handleSearchQuery(this.state.inputValue);
    event.preventDefault();
  }

  handleInputChange (event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormControl xs={6} type="text" placeholder="Search" value={this.state.inputValue} onChange={this.handleInputChange} />
        </FormGroup>
        {' '}
        <Button type="submit">Go!</Button>
      </Form>   
    );
  }
}

