import { Action } from '@ngrx/store';

export interface RequestStartAction extends Action {
  payload: {
    field: string;
  };
}

export interface RequestSuccessAction extends Action {
  payload: {
    field: string,
    key: string;
    data: any,
  };
}

export interface RequestFailureAction extends Action {
  payload: {
    error: Error | null,
  };
}

export const getActionName = (prefix) => (name) => `[${prefix}] ${name}`;
export const hasDataField = (action: RequestSuccessAction | RequestStartAction) => action.payload.field.length > 0;
export const convertToDataObject = (key: string) => (action: RequestSuccessAction) => {
  const { payload: { data } } = action;
  if (Array.isArray(data)) {
    return data.reduce((acc, item) => ({ ...acc, [item[key]]: item }), {});
  }

  return data;
};

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

export const requestStart = (prefix: String) => (payload: { field: string }): RequestStartAction => ({
  payload,
  type: getActionName(prefix)(REQUEST_START),
});

export const requestSuccess = (prefix: String) => (payload: { field: string, key: string, data: any }): RequestSuccessAction => ({
  payload,
  type: getActionName(prefix)(REQUEST_SUCCESS),
});

export const requestFailure = (prefix: String) => (payload: { error: Error | null }): RequestFailureAction => ({
  payload,
  type: getActionName(prefix)(REQUEST_FAILURE),
});
