import sodaListReducer from '../../reducers/soda-list-reducer';
describe('sodaListReducer', () => {
  let action;
  const sodaData = {
    name: 'Cherry Pop',
    brand: 'Pepsi',
    price: '12',
    flavor: 'cherry',
    id: 1
  };


describe('sodaListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(sodaListReducer({}, { type: null })).toEqual({});
  });
});


test('Should successfully add new soda data to masterSodaList', () => {
    const {name, brand, price, flavor, id} = sodaData;
      action = {
        type: 'ADD_SODA',
        name: name,
        brand: brand,
        price: price,
        flavor: flavor,
        id: id
  };

  expect(sodaListReducer({}, action)).toEqual({
    [id] : {
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      id: id
    }
  });
});
});