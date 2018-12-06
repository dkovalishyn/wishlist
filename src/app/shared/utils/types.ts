import { Action } from '@ngrx/store';

export interface RequestStatus {
  status: STATUS;
  error: null | Error;
}

export const defaultRequestStatus = {
  status: null,
  error: null,
};

export enum STATUS {
  PENDING,
  SUCCESS,
  FAILED,
}

export interface ActionWithPayload extends Action {
  payload: any;
}

