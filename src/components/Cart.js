import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';

// const style = {
//   height: 100,
//   width: 100,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

class Cart extends PureComponent {

    render() {
        const {pizza} = this.props
        const toppings = pizza.toppings.map(topping =>
            <p key={topping}>{topping.name}, €{topping.price}</p>)
        const toppingsPrice = pizza.toppings.map((x) => x.price).reduce((x,y) => x + y)

        return (
        <Paper className="outer-paper">
          <h1>Your new age pizza</h1>

          <p><strong>Base</strong>: {pizza.base.name}, €{pizza.base.price}</p>
          <p><strong>Sauce</strong>: {pizza.sauce.name}, €{pizza.sauce.price}</p>
          <p><strong>Toppings</strong>:</p>
          {toppings}

          <p><strong>Total</strong>: {pizza.base.price + pizza.sauce.price + toppingsPrice}</p>
        </Paper>)
      }
    }

    const mapStateToProps = (state) => ({
      pizza: state.pizza
    })

    export default connect(mapStateToProps)(Cart)
