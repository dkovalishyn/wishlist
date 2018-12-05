import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducer';

const getNotifications = createFeatureSelector<State>('notifications');
const getResource = createSelector(
  getNotifications,
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
export const getAllNotifications = createSelector(
  getIds,
  getEntities,
  (ids, entities) => ids.map(id => entities[id]),
);

