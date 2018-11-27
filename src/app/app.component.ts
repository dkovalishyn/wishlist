import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { zip } from 'rxjs/Observable/zip';
import { getToken, getUserProfile } from './core/auth/store/selectors';
import { InitializeApplication } from './store/actions';
import { State } from './store/reducer';
import { UserService } from './core/auth/services/user.service';
import { WebSocketService } from './core/web-socket/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wish cafe';

  constructor(
    private store: Store<State>,
    private userService: UserService,
    private webSocket: WebSocketService,
  ) {
    zip(this.store.select(getUserProfile), this.store.select(getToken))
      .subscribe(([profile, token]) => {
        if (token.length > 0 && !profile) {
          this.store.dispatch(new InitializeApplication());
        }

        if (profile) {
          this.webSocket.connect(profile.userId).subscribe(
            (message) => console.log(message),
            (error) => {
              console.log(error);
              this.webSocket.stopReconnection();
            },
            () => this.webSocket.reconnect(),
          );
        }

      });
  }
}
