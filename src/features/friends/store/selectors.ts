import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducer';

const getFriends = createFeatureSelector<State>('friends');
const getResource = createSelector(
  getFriends,
  (state) => state.resource,
);
const getIds = createSelector(
  getResource,
  (state) => state.ids,
);
const getEntities = createSelector(
  getResource,
  (state) => state.entities,
);
export const getAllFriends = createSelector(
  getIds,
  getEntities,
  (ids, entities) => ids.map(id => entities[id]),
);
export const getUserById = (id: string) => createSelector(
  getEntities,
  (state) => state[id],
);
