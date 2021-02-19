import * as actions from './../../actions';

describe('taproom actions', () => {
  it('deleteSoda should create DELETE_SODA action', () => {
    expect(actions.deleteSoda(1)).toEqual({
      type: 'DELETE_SODA',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addSoda should create ADD_SODA action', () => {
    expect(actions.addSoda({name: 'Cherry Pop',
    brand: 'Pepsi',
    price: '12',
    flavor: 'cherry',
    id: 1})).toEqual({
      type: 'ADD_SODA',
      name: 'Cherry Pop',
      brand: 'Pepsi',
      price: '12',
      flavor: 'cherry',
      id: 1
    });
  });

});