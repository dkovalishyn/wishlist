import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { zip } from 'rxjs';
import { of } from 'rxjs/Observable/of';
import { map, switchMap } from 'rxjs/operators';
import { mime } from 'mime-types';
import { State } from '../../../../app/store/reducer';
import { Person } from '../../../../models/Person';
import { getUserById } from '../../store/selectors';
import { GetUserById } from '../../store/actions/getUserById';
import { getUserId } from '../../../../core/auth/store/selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: Person;
  isMe: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params: ParamMap) => {
        this.store.dispatch(new GetUserById(params.get('id')));
        return params.get('id');
      }),
      switchMap((id: string) =>
        zip(this.store.select(getUserById(id)), this.store.select(getUserId), of(id)))
    ).subscribe(([ user, userId, id ]) => {
        this.user = user;
        this.isMe = userId === id;
    });
  }

  getPathToAvatar() {
    return `http://localhost:10010${this.user.avatar}`;
  }
}
