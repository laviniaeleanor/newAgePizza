import React, { Component } from 'react';
import {pineapple, corn, olives, redOnion, spinach, cherryTomatoes, chicken} from '../data/menu'
import Paper from 'material-ui/Paper';

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
        <Paper>
            <form name = "toppings" onSubmit={this.handleSubmit}>
            <h2> Choose up to three toppings:</h2>

              <input type="checkbox" className="limited" name= {pineapple.name} value={pineapple.name} onChange={this.handleChange}/>{pineapple.name}<br></br>

              <input type="checkbox" className="limited" name= {corn.name} value={corn.name} onChange={this.handleChange} />{corn.name}<br></br>

              <input type="checkbox" className="limited" name= {olives.name} value={olives.name} onChange={this.handleChange} />{olives.name}<br></br>

              <input type="checkbox" className="limited" name= {redOnion.name} value={redOnion.name} onChange={this.handleChange} />{redOnion.name}<br></br>

              <input type="checkbox" className="limited" name= {spinach.name} value={spinach.name} onChange={this.handleChange} />{spinach.name}<br></br>

              <input type="checkbox" className="limited" name= {cherryTomatoes.name} value={cherryTomatoes.name} onChange={this.handleChange} />{cherryTomatoes.name}<br></br>

              <input type="checkbox" className="limited" name= {chicken.name} value={chicken.name} onChange={this.handleChange} />{chicken.name}<br></br>

              <button className="btn btn-default" type="submit">Save</button>
            </form>
        </Paper>
    );
  }
}
