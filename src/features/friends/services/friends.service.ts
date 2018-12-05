import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { stringify } from 'querystring';
import { ApiService } from '../../../core/api/api.service';
import { Person } from '../../../models/Person';

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

  follow(params: { userId: string, friendId: string}): Observable<Person> {
    const { userId, friendId } = params;
    const requestUrl = `${this.friendsUrl}/${userId}/follow/?${stringify({ friendId })}`;
    return this.api.post<Person>(requestUrl, null);
  }

  search(params: { fullName: string }): Observable<Person[]> {
    return this.api.get<Person[]>(`${this.friendsUrl}/search?${stringify(params)}`);
  }
}
