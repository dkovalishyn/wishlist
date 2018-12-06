import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducer';
import { GetWishes } from '../../store/actions/getAll';
import { getAllWishes, getAllWishesStatus } from '../../store/selectors';
import { Wish } from '../../../../shared/models/Wish';
import { Observable } from 'rxjs';
import { STATUS } from '../../../../shared/utils/types';

@Component({
  selector: 'app-wish-container',
  templateUrl: './wish-container.component.html',
  styleUrls: ['./wish-container.component.scss']
})
export class WishContainerComponent implements OnInit {
  wishes$: Observable<Wish[]>;
  getAllWishesStatus$: Observable<STATUS>;

  constructor(
    private store: Store<AppState>
  ) {
    this.wishes$ = store.select(getAllWishes);
    this.getAllWishesStatus$ = store.select(getAllWishesStatus);
  }

  ngOnInit() {
    this.getAllWishesStatus$.subscribe(status => status == null && this.store.dispatch(new GetWishes()));
  }
}
