import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import {Toggle} from '../containers/Toggle'
import {addDelivery} from '../actions/pizza'

// const style = {
//   height: 100,
//   width: 100,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

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
        <Paper className="outer-paper">
          <h1>Your new age pizza</h1>

          <p><strong>Base</strong>: {pizza.base.name}, € {pizza.base.price}</p>
          <p><strong>Sauce</strong>: {pizza.sauce.name}, € {pizza.sauce.price}</p>
          <p><strong>Toppings</strong>:</p>
          {toppings}
          <button onClick = {this.addDelivery}>{pizza.delivery? "Remove Turbo Delivery":"Add Turbo Delivery"}</button>
          { pizza.delivery === false &&
          <p><strong>Total</strong>: € {total}</p>
      }
      { pizza.delivery === true &&
            <p><strong>Total</strong>: € {totalDelivery}</p>
        }
        </Paper>)
      }
    }

    const mapStateToProps = (state) => ({
      pizza: state.pizza
    })

    export default connect(mapStateToProps, {addDelivery})(Cart)
