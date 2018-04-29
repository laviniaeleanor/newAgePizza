import React, { Component } from 'react';
import { Base } from '../containers/Base';
import { Sauce } from '../containers/Sauce'
import { Toppings } from '../containers/Toppings'
import { updateBase, updateSauce, updateToppings } from '../actions/pizza'
import { connect } from 'react-redux'

class Form extends Component {

    updateBase = (base) => {
    this.props.updateBase(base)
    }

    updateSauce = (sauce) => {
    this.props.updateSauce(sauce)
    }

    updateToppings = (topping) => {
    this.props.updateToppings(topping)
    }

    render() {
        return (
            <div className="Form">
                <Base onSubmit = {this.updateBase}/>
                <Sauce onSubmit = {this.updateSauce}/>
                <Toppings onSubmit = {this.updateToppings}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza,
  }
}

export default connect(mapStateToProps, { updateBase, updateSauce, updateToppings })(Form)
