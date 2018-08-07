import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { State } from '../../../store/reducer';
import { Store } from '@ngrx/store';
import { Person } from '../../../models/Person';
import { getUserById } from '../../store/selectors';
import { GetUserById } from '../../store/actions/getUserById';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: Person;

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
      switchMap((id: string) => this.store.select(getUserById(id)))
    ).subscribe((user: Person) => {
        this.user = user;
    });
  }

}
