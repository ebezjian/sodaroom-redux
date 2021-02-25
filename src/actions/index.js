

export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM',
});

export const addSoda = (soda) => {
  const {name, brand, price, flavor, quantity, id} = soda;
  return {
    type: 'ADD_SODA',
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    quantity: quantity,
    id: id,
  }
}

export const toggleEdit = () => {
  return {
    type: 'TOGGLE_EDIT',
  };
}