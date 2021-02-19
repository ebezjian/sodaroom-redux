export default (state = {}, action) => {
  const {name, brand, price, flavor, id} = action;
  switch (action.type) {
    case 'ADD_SODA':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          flavor: flavor,
          
          id: id
        }
      });
    case 'DELETE_SODA':
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};