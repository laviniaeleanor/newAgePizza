import React, { Component } from 'react';
import {pineapple, corn, olives, redOnion, spinach, cherryTomatoes, chicken} from '../data/menu'
import Paper from 'material-ui/Paper';
import {teal900, deepOrange500} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  width: 500,
  padding: "2em",
  margin: "1em",
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: teal900,
};

export class Toppings extends Component {
    state = {toppings: []}

    handleChange = (e) => {
        if (e.target.checked === true)
        this.setState({toppings: [...this.state.toppings, e.target.name]})
        else
        {const newArray = this.state.toppings.filter(name => name !== e.target.name)
        this.setState({toppings: newArray})}
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.toppings.length > 3) return alert("Please only choose three toppings")
        this.props.onSubmit(this.state.toppings)
        console.log('You have selected:', this.state.toppings);
    }

    render() {
        return (
            <Paper style={style}>
                <form className="Form" name = "toppings" onSubmit={this.handleSubmit}>
                    <h2> Step 3 - Choose up to three toppings:</h2>

                    <input type="checkbox" className="limited" name= {pineapple.name} value={pineapple.price} onChange={this.handleChange}/>{pineapple.name}<br></br>

                    <input type="checkbox" className="limited" name= {corn.name} value={corn.price} onChange={this.handleChange} />{corn.name}<br></br>

                    <input type="checkbox" className="limited" name= {olives.name} value={olives.price} onChange={this.handleChange} />{olives.name}<br></br>

                    <input type="checkbox" className="limited" name= {redOnion.name} value={redOnion.price} onChange={this.handleChange} />{redOnion.name}<br></br>

                    <input type="checkbox" className="limited" name= {spinach.name} value={spinach.price} onChange={this.handleChange} />{spinach.name}<br></br>

                    <input type="checkbox" className="limited" name= {cherryTomatoes.name} value={cherryTomatoes.price} onChange={this.handleChange} />{cherryTomatoes.name}<br></br>

                    <input type="checkbox" className="limited" name= {chicken.name} value={chicken.price} onChange={this.handleChange} />{chicken.name}<br></br>

                    <FloatingActionButton className= "Add" backgroundColor={deepOrange500} zDepht='3' type="submit"><ContentAdd /></FloatingActionButton>
                </form>
            </Paper>
        );
    }
}
