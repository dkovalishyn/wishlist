import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getToken, getUserProfile } from './core/auth/store/selectors';
import { zip } from 'rxjs';
import { InitializeApplication } from './store/actions';
import { State } from './store/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(
    private store: Store<State>,
  ) {
    zip(
      this.store.select(getToken),
      this.store.select(getUserProfile),
    )
    .subscribe(([ token, friend ]) => {
       if (token && !friend) {
         this.store.dispatch(new InitializeApplication());
       }
    });
  }
}
