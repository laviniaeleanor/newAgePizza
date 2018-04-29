import React, { Component } from 'react';
import {pineapple, corn, olives, redOnion, spinach, cherryTomatoes, chicken} from '../data/menu'
import Paper from 'material-ui/Paper';

function limit(limit) {
    const elements = document.getElementsByClassName('limited')
    console.log(elements)

    const filteredElements = elements.filter((x) => {return x.checked})
    if (filteredElements.length > limit) {alert('Please select no more than ' + limit + ' checkboxes.')
    return false}
    else return true
}

function limitchex(oCheckbox, limit)
{
    var el, i = 0, n = limit, oForm = oCheckbox.form;
    while (el === oForm.elements[i++])
    {
        if (el.className === 'limited' && el.checked)
        --n;
        if (n < 0)
        {
            alert('Please select no more than ' + limit + ' checkboxes.')
            return false;
        }
    }
    return true;
}

export class Toppings extends Component {
  state = {toppings: {}}

  checkItem = (item, e) => {
      let toppings = this.state.toppings
      toppings[item.id] = e.target.checked
      this.setState({toppings})
  }

  handleChange = (e) => {
        console.log(this.state)
        const newTopping = {name: e.target.name, price: e.target.value}
        console.log(newTopping)
        this.setState({toppings: [...this.state.toppings, newTopping]})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // limit(3)
        this.props.onSubmit(this.state.toppings)
        console.log('You have selected:', this.state.toppings);
}

  render() {
    return (
        <Paper>
            <form name = "toppings" onSubmit={this.handleSubmit}>
            <h2> Choose up to three toppings:</h2>

              <input type="checkbox" className="limited" name= {pineapple.name} value={pineapple.price} onChange={this.handleChange} />{pineapple.name}<br></br>

              <input type="checkbox" className="limited" name= {corn.name} value={corn.price} onChange={this.handleChange} />{corn.name}<br></br>

              <input type="checkbox" className="limited" name= {olives.name} value={olives.price} onChange={this.handleChange} />{olives.name}<br></br>

              <input type="checkbox" className="limited" name= {redOnion.name} value={redOnion.price} onChange={this.handleChange} />{redOnion.name}<br></br>

              <input type="checkbox" className="limited" name= {spinach.name} value={spinach.price} onChange={this.handleChange} />{spinach.name}<br></br>

              <input type="checkbox" className="limited" name= {cherryTomatoes.name} value={cherryTomatoes.price} onChange={this.handleChange} />{cherryTomatoes.name}<br></br>

              <input type="checkbox" className="limited" name= {chicken.name} value={chicken.price} onChange={this.handleChange} />{chicken.name}<br></br>

              <button className="btn btn-default" type="submit">Save</button>
            </form>
        </Paper>
    );
  }
}
