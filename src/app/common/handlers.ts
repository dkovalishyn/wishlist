import { Action } from '@ngrx/store';
import { ActionWithPayload, defaultRequestStatus, RequestStatus, STATUS } from './types';

interface SuccessAction extends Action {
  payload: any[];
}

const convertToDataObject = (key: string) => (action: SuccessAction) => {
  const { payload } = action;
  if (Array.isArray(payload) && key) {
    return payload.reduce((acc, item) => ({ ...acc, [item[key]]: item }), {});
  }

  return payload;
};

export const normalizeData = (key: string) => (action: SuccessAction) => {
  const dataObject = convertToDataObject(key)(action);
  const dataIds = Object.keys(dataObject);
  return {
    entities: dataObject,
    ids: dataIds,
  };
};

export interface RequestActionTypes {
  START: string;
  SUCCESS: string;
  FAILED: string;
}

export const createRequestReducer = (actionTypes: RequestActionTypes) =>
  (state: RequestStatus = defaultRequestStatus, action: Action) => {
    switch (action.type) {
      case (actionTypes.SUCCESS):
        return {
          ...state,
          status: STATUS.SUCCESS,
          error: null,
        };
      case (actionTypes.FAILED):
        return {
          ...state,
          status: STATUS.FAILED,
          error: (action as ActionWithPayload).payload,
        };
      case (actionTypes.START):
        return {
          ...state,
          status: STATUS.PENDING,
          error: null,
        };
      default:
        return state;
    }
  };
