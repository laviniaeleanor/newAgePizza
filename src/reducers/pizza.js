import { base25, mixItUp} from '../data/menu'
import {UPDATE_BASE, UPDATE_SAUCE, UPDATE_TOPPINGS, ADD_DELIVERY} from '../actions/pizza'
const initialState = {base: base25, sauce: mixItUp, toppings: ["cherryTomatoes"], delivery: false}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BASE :
        return {...state, base: action.payload}

    case UPDATE_SAUCE :
        return {...state, sauce: action.payload}

    case UPDATE_TOPPINGS :
        return {...state, toppings: Object.values(action.payload)}

    case ADD_DELIVERY :
        return {...state, delivery: !state.delivery}

    default :
      return state
  }
}
