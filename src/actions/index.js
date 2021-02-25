import * as c from './../actions/ActionTypes';

export const deleteSoda = (id) => ({
  type: c.DELETE_SODA,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const addSoda = (soda) => {
  const {name, brand, price, flavor, quantity, id} = soda;
  return {
    type: c.ADD_SODA,
    name,
    brand,
    price,
    flavor,
    quantity,
    id
  }
};

export const toggleEdit = () => {
  return {
    type: c.TOGGLE_EDIT,
  };
}