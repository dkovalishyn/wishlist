import { Component, Input, OnInit } from '@angular/core';
import { WishService } from '../../services/wish.service';
import { Wish } from '../../../models/wish';
import { DndListComponent } from '../../../ui/dnd-list/dnd-list.component';
import { Store } from '@ngrx/store';
import { GetWishes } from '../../store/actions/getAll';
import { allWishes } from '../../store/selectors';
import { State } from '../../../store/reducer';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent extends DndListComponent implements OnInit {
  @Input() list: Wish[];

  constructor(
    private wishService: WishService,
    private store: Store<State>,
  ) {
    super();
  }

  ngOnInit() {
    this.store.dispatch(new GetWishes());
    this.store.select(allWishes)
    .subscribe(wishes => {
      this.list = wishes;
    });
  }
}
