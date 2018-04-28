import { base25, mixItUp, cherryTomatoes } from '../data/menu'
const initialState = {base: base25, sauce: mixItUp, toppings: [cherryTomatoes]}

export default (state = initialState, action) => {
  switch (action.type) {
    // case LIKE :
    //     return action.payload


    default :
      return state
  }
}
