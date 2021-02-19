import * as c from './ActionTypes';

export const deleteSoda = (id) => ({
  type: c.DELETE_SODA
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addSoda = (soda) => {
  const {name, brand, price, flavor, id} = soda;
  return {
    type: 'ADD_SODA',
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    id: id,
  }
}

export const toggleEdit = () => {
  return {
    type: c.TOGGLE_EDIT
  };
}