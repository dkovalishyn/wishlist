import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWish from './reducer';

const getWish = createFeatureSelector<fromWish.State>('wish');
const getResource = createSelector(
  getWish,
  (state) => state.resource,
);
export const allWishes = createSelector(
  getResource,
  (state) => state.ids.map(id => state.entities[id]),
);
export const getIds = createSelector(
  getResource,
  (state) => state.ids,
);
export const getEntities = createSelector(
  getResource,
  (state) => state.entities,
);
export const getAllWishes = createSelector(
  getIds,
  getEntities,
  (ids, entities) => ids.map(id => entities[id]),
);
export const getWishById = (id: string) => createSelector(
  getResource,
  (state) => state.entities[id],
);
