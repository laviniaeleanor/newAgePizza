import React, { Component } from 'react';
import {whiteSauce, redSauce, doubleRedSauce, mixItUp} from '../data/menu'
import Paper from 'material-ui/Paper';
import {teal700, deepOrange500} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  width: 500,
  padding: "2em",
  margin: "1em",
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: teal700,
};


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
            <Paper style = {style}>
                <form className = "Form" onSubmit={this.handleSubmit}>
                    <h2> Step 2 - Choose your favorite sauce:</h2>

                    <input type="radio" name= {whiteSauce.name} value={whiteSauce.price} onChange={this.handleChange} checked={this.state.name === whiteSauce.name}/>{whiteSauce.name}<br></br>

                    <input type="radio" name= {redSauce.name} value={redSauce.price} onChange={this.handleChange} checked={this.state.name === redSauce.name}/>{redSauce.name}<br></br>

                    <input type="radio" name= {doubleRedSauce.name} value={doubleRedSauce.price} onChange={this.handleChange} checked={this.state.name === doubleRedSauce.name}/>{doubleRedSauce.name}<br></br>

                    <input type="radio" name= {mixItUp.name} value={mixItUp.price} onChange={this.handleChange} checked={this.state.name === mixItUp.name}/>{mixItUp.name}<br></br>

                    <FloatingActionButton className= "Add" backgroundColor={deepOrange500} zDepht='3' type="submit"><ContentAdd /></FloatingActionButton>
                </form>
            </Paper>
        );
    }
}
