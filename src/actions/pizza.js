export const UPDATE_BASE = 'UPDATE_BASE'
export const UPDATE_SAUCE = 'UPDATE_SAUCE'
export const UPDATE_TOPPINGS = 'UPDATE_TOPPINGS'
export const ADD_DELIVERY = 'ADD_DELIVERY'


export const updateBase = base => ({
  type: UPDATE_BASE,
  payload: base
})

export const updateSauce = sauce => ({
  type: UPDATE_SAUCE,
  payload: sauce
})

export const updateToppings = topping => ({
  type: UPDATE_TOPPINGS,
  payload: topping
})

export const addDelivery = () => ({
  type: ADD_DELIVERY
})
