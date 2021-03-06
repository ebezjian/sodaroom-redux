import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import sodaListReducer from '../../reducers/soda-list-reducer';
import * as c from './../../actions/ActionTypes';


describe("rootReducer", () => {
  let store = createStore(rootReducer);
  
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterSodaList: {},
      formVisibleOnPage: false
    });
  });
  test('Check that initial state of sodaListReducer matches root reducer', () => {
    expect(store.getState().masterSodaList).toEqual(sodaListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_SODA action works for ticketListReducer and root reducer', () => {
    const action = {
      type: c.ADD_SODA,
      name: 'Cherry Pop',
      brand: 'Pepsi',
      price: '12',
      quantity: 124,
      flavor: 'cherry',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterSodaList).toEqual(sodaListReducer(undefined, action));
  });
  
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM,
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
  
});