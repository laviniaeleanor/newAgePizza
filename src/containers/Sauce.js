import React, { Component } from 'react';
import {whiteSauce, redSauce, doubleRedSauce, mixItUp} from '../data/menu'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export class Sauce extends Component {
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
        <Paper>
            <form onSubmit={this.handleSubmit}>
            <h2> Choose your favorite sauce:</h2>

              <input type="radio" name= {whiteSauce.name} value={whiteSauce.price} onChange={this.handleChange} checked={this.state.name === whiteSauce.name}/>{whiteSauce.name}<br></br>

              <input type="radio" name= {redSauce.name} value={redSauce.price} onChange={this.handleChange} checked={this.state.name === redSauce.name}/>{redSauce.name}<br></br>

              <input type="radio" name= {doubleRedSauce.name} value={doubleRedSauce.price} onChange={this.handleChange} checked={this.state.name === doubleRedSauce.name}/>{doubleRedSauce.name}<br></br>

              <input type="radio" name= {mixItUp.name} value={mixItUp.price} onChange={this.handleChange} checked={this.state.name === mixItUp.name}/>{mixItUp.name}<br></br>

              <RaisedButton className="btn btn-default" type="submit">Save</RaisedButton>
            </form>
        </Paper>
    );
  }
}
