import React, { Component } from 'react';
import {base20, base25, base30, base35} from '../data/menu'

export class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({base: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
              <input type="radio" name="base" value={base25} checked>1</input><br></br>
              <input type="radio" name="base" value={base30}>2</input><br></br>
              <input type="radio" name="base" value={base35}>3</input><br></br>
              <input type="radio" name="base" value={base20}>4</input>
            </form>
        </div>
    );
  }
}
