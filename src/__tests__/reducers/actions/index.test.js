import * as actions from './../../actions';

describe('taproom actions', () => {
  it('deleteSoda should create DELETE_SODA action', () => {
    expect(actions.deleteSoda(1)).toEqual({
      type: 'DELETE_SODA',
      id: 1
    });
  });
});