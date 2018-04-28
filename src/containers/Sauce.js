import React, { Component } from 'react';
import {whiteSauce, redSauce, doubleRedSauce, mixItUp} from '../data/menu'

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
        <div>
            <form onSubmit={this.handleSubmit}>
            <label> Choose your favorite sauce:<br></br>
              <input type="radio" name= {whiteSauce.name} value={whiteSauce.price} onChange={this.handleChange} checked={this.state.name === whiteSauce.name}/>{whiteSauce.name}<br></br>
              <input type="radio" name= {redSauce.name} value={redSauce.price} onChange={this.handleChange} checked={this.state.name === redSauce.name}/>{redSauce.name}<br></br>
              <input type="radio" name= {doubleRedSauce.name} value={doubleRedSauce.price} onChange={this.handleChange} checked={this.state.name === doubleRedSauce.name}/>{doubleRedSauce.name}<br></br>
              <input type="radio" name= {mixItUp.name} value={mixItUp.price} onChange={this.handleChange} checked={this.state.name === mixItUp.name}/>{mixItUp.name}<br></br>
              </label>
              <button className="btn btn-default" type="submit">Save</button>
            </form>
        </div>
    );
  }
}
