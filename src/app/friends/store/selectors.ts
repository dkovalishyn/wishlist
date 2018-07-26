import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducer';

const getFriends = createFeatureSelector<State>('friends');
const getIds = createSelector(
  getFriends,
  (state) => state.ids,
);
const getEntities = createSelector(
  getFriends,
  (state) => state.entities,
);
export const getAllFriends = createSelector(
  getIds,
  getEntities,
  (ids, entities) => ids.map(id => entities[id]),
);
