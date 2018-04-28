import React, { Component } from 'react';
import {Base} from '../containers/Base'
import { updateBase } from '../actions/pizza'
import {connect} from 'react-redux'

class Form extends Component {

    updateBase = (base) => {
    this.props.updateBase(base)
  }

  render() {
    const { pizza } = this.props

    return (
        <Base onSubmit = {this.updateBase}/>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    pizza: state.pizza,
  }
}

export default connect(mapStateToProps, { updateBase })(Form)
