import * as handlers from './handlers';

describe('utility handlers ->', () => {
  describe('deleteItem function ->', () => {
    it('should delete item from list', () => {
      const state = {
        ids: [1, 2, 3],
        entities: {
          1: 'Entity 1',
          2: 'Entity 2',
          3: 'Entity 3',
        }
      };
      const action = {
        type: 'DELETE',
        payload: {
          _id: 2
        }
      };
      const expected = {
        ids: [1, 3],
        entities: {
          1: 'Entity 1',
          3: 'Entity 3',
        }
      };
      expect(handlers.deleteItem(state, action)).toEqual(expected);
    });
  });
});
