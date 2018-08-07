import { Action } from '@ngrx/store';
import { Notification } from '../../../models/notification';
import { createRequestActionTypes } from '../../../common/actions';
import config from './config.json';

export const actionTypes = createRequestActionTypes(config.prefix)('GET_ALL_NOTIFICATIONS');

export class GetAllNotifications implements Action {
    readonly type = actionTypes.START;

    constructor() {}
}

export class GetAllNotificationsSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor(public payload: Notification[]) {}
}

export class GetAllNotificationsFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}
