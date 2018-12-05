import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../../app/store/reducer';
import { GetWishes } from '../../store/actions/getAll';
import { getAllWishes } from '../../store/selectors';
import { Wish } from '../../../../models/Wish';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wish-container',
  templateUrl: './wish-container.component.html',
  styleUrls: ['./wish-container.component.scss']
})
export class WishContainerComponent implements OnInit {
  wishes$: Observable<Wish[]>;

  constructor(
    private store: Store<State>
  ) {
    this.wishes$ = store.select(getAllWishes);
  }

  ngOnInit() {
    this.store.dispatch(new GetWishes());
  }
}
