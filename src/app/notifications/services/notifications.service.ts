import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api/api.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notificationsUrl = 'notification';

  constructor(
    private api: ApiService,
  ) { }

  getAllNotifications(): Observable<Notification[]> {
    return this.api.get<Notification[]>(`${this.notificationsUrl}`);
  }
}
