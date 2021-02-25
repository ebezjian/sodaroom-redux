import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const {name, brand, price, flavor, id} = action;
  switch (action.type) {
    case c.ADD_SODA:
      return Object.assign({}, state, {
        [id]: {
          name,
          brand,
          price,
          flavor,
          quantity,
          id: id
        }
      });
    case c.DELETE_SODA:
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};