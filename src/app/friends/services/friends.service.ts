import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import qs from 'querystring';
import { ApiService } from '../../core/api/api.service';
import { Friend } from '../../models/friend';

@Injectable()
export class FriendsService {
  private friendsUrl = 'user';

  constructor(
    private api: ApiService
  ) { }

  getFriends(): Observable<Friend[]> {
    return this.api.get<Friend[]>(this.friendsUrl);
  }

  follow(params: { userId: string, friendId: string}): Observable<Notification> {
    const { userId, friendId } = params;
    const requestUrl = `${this.friendsUrl}/${userId}/?${qs.stringify(friendId)}`;
    return this.api.post<Notification>(requestUrl, null);
  }
}
