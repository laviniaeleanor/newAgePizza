import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import {addDelivery} from '../actions/pizza'
import RaisedButton from 'material-ui/RaisedButton';
import {teal700} from 'material-ui/styles/colors';

const style = {
  width: 500,
  padding: "2em",
  margin: "1em",
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: teal700,
};

class Cart extends PureComponent {

    addDelivery = () => {
    this.props.addDelivery()
    }

    render() {
        const {pizza} = this.props
        const toppings = pizza.toppings.map(topping =>
            <p>{topping}, € 0.50</p>)
        const toppingsPrice = toppings.length * 0.50

        const total = Number(pizza.base.price) + Number(pizza.sauce.price) + Number(toppingsPrice)
        const totalDelivery = total + (total/100*10)

        return (
        <Paper style={style} zDepht='4'>
          <div className = "Cart">
          <h1>~ Your new age pizza ~</h1>

          <p><strong>Base</strong>: {pizza.base.name}, € {pizza.base.price}</p>
          <p><strong>Sauce</strong>: {pizza.sauce.name}, € {pizza.sauce.price}</p>
          <p><strong>Toppings</strong>:</p>
          {toppings}
          <RaisedButton onClick = {this.addDelivery}>{pizza.delivery? "Remove Turbo Delivery":"Add Turbo Delivery"}</RaisedButton>
          { pizza.delivery === false &&
          <p><strong>Total</strong>: € {total}</p>
      }
      { pizza.delivery === true &&
            <p><strong>Total</strong>: € {totalDelivery}</p>
        }
        </div>
        </Paper>)
      }
    }

    const mapStateToProps = (state) => ({
      pizza: state.pizza
    })

    export default connect(mapStateToProps, {addDelivery})(Cart)
