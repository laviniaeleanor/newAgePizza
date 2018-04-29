import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import {addDelivery} from '../actions/pizza'
import RaisedButton from 'material-ui/RaisedButton';
import {teal700, deepOrange200} from 'material-ui/styles/colors';

const style = {
    paper: {
      width: 500,
      padding: "2em",
      margin: "1em",
      textAlign: 'left',
      display: 'inline-block',
      backgroundColor: teal700,
    },
    button: {
        width: 420,
        height: 50,
        fontFamily: 'Pacifico'
    }};

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
        <Paper style={style.paper} zDepht='4'>
            <div className = "Cart">

                <h1>~ Your new age pizza ~</h1><br></br>

                <p><strong>Base</strong>: {pizza.base.name}, € {pizza.base.price}</p><br></br>

                <p><strong>Sauce</strong>: {pizza.sauce.name}, € {pizza.sauce.price}</p><br></br>

                <p><strong>Toppings</strong>:</p>
                {toppings}<br></br>

                { pizza.delivery === false &&
                <p><strong>TOTAL</strong>: € {total.toFixed(2)}</p>
                }
                { pizza.delivery === true &&
                <p><strong>TOTAL</strong>: € {totalDelivery.toFixed(2)}</p>
                }

                <RaisedButton label = {pizza.delivery? "Remove Turbo Delivery":"Add Turbo Delivery"} style={style.button} onClick = {this.addDelivery}></RaisedButton><br></br><br></br>

                <RaisedButton label="Place Order" style= {style.button} backgroundColor= {deepOrange200} onClick={()=> alert("Pizza is on it's way")} /><br></br><br></br><br></br>

                <img src='https://media.giphy.com/media/pVK9JXQ4w1ck/giphy.gif' alt='Beyonce with your yummy pizza'/>

                <h1 id="enjoy">Enjoy!</h1>
            </div>
        </Paper>)
      }
    }

    const mapStateToProps = (state) => ({
      pizza: state.pizza
    })

    export default connect(mapStateToProps, {addDelivery})(Cart)
