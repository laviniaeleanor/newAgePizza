import { base25, mixItUp, cherryTomatoes } from '../data/menu'
import {UPDATE_BASE, UPDATE_SAUCE, UPDATE_TOPPINGS} from '../actions/pizza'
const initialState = {base: base25, sauce: mixItUp, toppings: [cherryTomatoes]}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BASE :
        return {...state, base: action.payload}

    case UPDATE_SAUCE :
        return {...state, sauce: action.payload}

    case UPDATE_TOPPINGS :
        return {...state, toppings: [...state, action.payload]}

    default :
      return state
  }
}
