import React, { Component } from 'react';
import { Base } from '../containers/Base';
import { Sauce } from '../containers/Sauce'
import { updateBase, updateSauce } from '../actions/pizza'
import { connect } from 'react-redux'

class Form extends Component {

    updateBase = (base) => {
    this.props.updateBase(base)
  }

  updateSauce = (sauce) => {
  this.props.updateSauce(sauce)
}

  render() {
    const { pizza } = this.props

    return (
        <div>
        <Base onSubmit = {this.updateBase}/>
        <Sauce onSubmit = {this.updateSauce}/>
        </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    pizza: state.pizza,
  }
}

export default connect(mapStateToProps, { updateBase, updateSauce })(Form)
