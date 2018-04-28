export const UPDATE_BASE = 'UPDATE_BASE'
export const UPDATE_SAUCE = 'UPDATE_SAUCE'
export const UPDATE_TOPPINGS = 'UPDATE_TOPPINGS'
export const ADD_DELIVERY = 'ADD_DELIVERY'


const updateBase = base => ({
  type: UPDATE_BASE,
  payload: base
})

const updateSauce = sauce => ({
  type: UPDATE_SAUCE,
  payload: sauce
})

const updateToppings = topping => ({
  type: UPDATE_TOPPINGS,
  payload: topping
})

const addDelivery = () => ({
  type: ADD_DELIVERY
})
