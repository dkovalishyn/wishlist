import { Action } from '@ngrx/store';
import { Friend } from '../../models/friend';

export interface State {
  ids: string[];
  entities: { [key: string]: Friend };
}

const initialState = {
  ids: [],
  entities: {},
};

export const reducer = (state: State = initialState, action: Action) => {
    return state;
};
