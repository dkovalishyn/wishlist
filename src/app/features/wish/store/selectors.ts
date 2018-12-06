import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWish from './reducer';

const getWish = createFeatureSelector<fromWish.State>('wish');
const getResource = createSelector(
  getWish,
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
export const getAllWishes = createSelector(
  getIds,
  getEntities,
  (ids, entities) => ids.map(id => entities[id]),
);
export const getWishById = (id: string) => createSelector(
  getResource,
  (state) => state.entities[id],
);
const getRequests = createSelector(
  getWish,
  (state) => state.requests,
);
export const getEditWishStatus = createSelector(
  getRequests,
  (state) => state.edit.status
);
export const getAllWishesStatus = createSelector(
  getRequests,
  (state) => state.getAll.status
);
