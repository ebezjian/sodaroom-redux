import * as a from './../../actions/index';
import * as c from './../../actions/ActionTypes';
describe('taproom actions', () => {  test('deleteKeg should create DELETE_KEG action', ()=>{
  expect(a.deleteKeg(1)).toEqual({
    type: c.DELETE_KEG,
    id: 1
  });
});

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addSoda should create ADD_SODA action', () => {
    expect(actions.addSoda({name: 'Cherry Pop', brand: 'Pepsi', price: 12, quantity: 124, flavor: 'cherry', id: 1})).toEqual({
      type: 'ADD_SODA',
      name: 'Cherry Pop',
      brand: 'Pepsi',
      price: 12,
      quantity: 124,
      flavor: 'cherry',
      id: 1
    });
  });

});