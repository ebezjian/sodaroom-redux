export const deleteSoda = id => ({
  type: 'DELETE_SODA',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
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