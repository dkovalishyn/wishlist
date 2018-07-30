import { Action } from '@ngrx/store';
import { getActionName } from '../common/actions';

export const INIT = getActionName('APP')('INIT');

export class InitializeApplication implements Action {
    readonly type = INIT;

    constructor() {}
}
