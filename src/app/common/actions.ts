import { Action } from '@ngrx/store';

export const getActionName = (prefix) => (name) => `[${prefix}] ${name}`;
export const convertToDataObject = (key: string) => (action: RequestSuccess) => {
  const { payload: { data } } = action;
  if (Array.isArray(data) && key) {
    return data.reduce((acc, item) => ({ ...acc, [item[key]]: item }), {});
  }

  return data;
};

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

export class RequestStart implements Action {
  readonly type = REQUEST_START;

  constructor(public payload: {
    field: string,
    isDataField: boolean,
  }) {}
}

export class RequestSuccess implements Action {
  readonly type = REQUEST_SUCCESS;

  constructor(public payload: {
    field: string,
    isDataField: boolean,
    data: any,
    key?: string,
  }) {
  }
}

export class RequestFailure implements Action {
  readonly type = REQUEST_FAILURE;

  constructor(public payload: {
    field: string,
    error: Error | null,
  }) {
  }
}

export type Action = RequestStart | RequestSuccess | RequestFailure;
