import React, { Component } from 'react';
import {base20, base25, base30, base35} from '../data/menu'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';
import {teal500} from 'material-ui/styles/colors';

const style = {
  width: 500,
  padding: "2em",
  margin: "1em",
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: teal500,
};

export class Base extends Component {
  state = {}

  handleChange = (e) => {
        this.setState({name: e.target.name, price: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        console.log('You have selected:', this.state.name + this.state.price);
}

  render() {
    return (
        <Paper style={style}>
            <form className= "Form" onSubmit={this.handleSubmit}>
            <h2> Step 1 - Choose your pizza size:</h2>
              <input type="radio" name= {base25.name} value={base25.price} onChange={this.handleChange} checked={this.state.name === base25.name}/>{base25.name}<br></br>

              <input type="radio" name= {base30.name} value={base30.price} onChange={this.handleChange} checked={this.state.name === base30.name}/>{base30.name}<br></br>

              <input type="radio" name= {base35.name} value={base35.price} onChange={this.handleChange} checked={this.state.name === base35.name}/>{base35.name}<br></br>

              <input type="radio" name= {base20.name} value={base20.price} onChange={this.handleChange} checked={this.state.name === base20.name}/>{base20.name}<br></br>

              <RaisedButton className="btn btn-default" type="submit">Save</RaisedButton>
            </form>
        </Paper>
    );
  }
}
