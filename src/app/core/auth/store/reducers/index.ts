import * as fromUser from './user';
import * as fromRequest from './request';
import { ActionReducer, combineReducers } from '@ngrx/store';

export interface State {
  user: fromUser.State;
  request: fromRequest.State;
}

export const reducer: ActionReducer<State> = combineReducers({
  user: fromUser.reducer,
  request: fromRequest.reducer
});
