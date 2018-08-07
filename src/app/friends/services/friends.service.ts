import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import qs from 'querystring';
import { ApiService } from '../../core/api/api.service';
import { Person } from '../../models/Person';

@Injectable()
export class FriendsService {
  private friendsUrl = 'user';

  constructor(
    private api: ApiService,
  ) { }

  getFriends(): Observable<Person[]> {
    return this.api.get<Person[]>(this.friendsUrl);
  }

  getUserById(id: string): Observable<Person> {
    return this.api.get<Person>(`${this.friendsUrl}/${id}`);
  }

  follow(params: { userId: string, friendId: string}): Observable<Notification> {
    const { userId, friendId } = params;
    const requestUrl = `${this.friendsUrl}/${userId}/follow/?${qs.stringify({ friendId })}`;
    return this.api.post<Notification>(requestUrl, null);
  }
}
