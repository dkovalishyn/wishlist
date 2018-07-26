import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWish from './reducer';

const getWish = createFeatureSelector<fromWish.State>('wish');
export const allWishes = createSelector(
  getWish,
  (state) => state.ids.map(id => state.entities[id]),
);
export const getIds = createSelector(
  getWish,
  (state) => state.ids,
);
export const getEntities = createSelector(
  getWish,
  (state) => state.entities,
);
export const getAllWishes = createSelector(
  getIds,
  getEntities,
  (ids, entities) => ids.map(id => entities[id]),
);
export const getWishById = (id: string) => createSelector(
  getWish,
  (state) => state.entities[id],
);
