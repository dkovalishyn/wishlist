import { Component, Input, OnInit } from '@angular/core';
import { Wish } from '../../../../shared/models/Wish';
import { State } from '../../../../store/reducer';
import { Store } from '@ngrx/store';
import { DeleteWish } from '../../store/actions/delete';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss']
})
export class WishComponent implements OnInit {
  @Input() wish: Wish;

  constructor(private  store: Store<State>) { }

  ngOnInit() {
  }

  delete() {
    this.store.dispatch(new DeleteWish(this.wish._id));
  }
}
