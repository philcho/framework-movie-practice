import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default class ListToggleNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: 1
    }

    this.handleListToggle = this.props.handleListToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    this.setState({ activeKey: selectedKey });
    this.handleListToggle(selectedKey === 1);
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
        <NavItem eventKey={1}>Watched</NavItem>
        <NavItem eventKey={2}>To Watch</NavItem>
      </Nav>
    );
  }
}
