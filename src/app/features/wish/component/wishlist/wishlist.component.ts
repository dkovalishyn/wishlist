import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Wish } from '../../../../shared/models/Wish';
import { AppState } from '../../../../store/reducer';
import { Store } from '@ngrx/store';
import { Reorder } from '../../store/actions/reorder';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  @Input() list: Wish[];

  constructor(private store: Store<AppState>) {
  }

  drop(event: CdkDragDrop<string[]>) {
    const { previousIndex: prevOrder, currentIndex: nextOrder } = event;
    moveItemInArray(this.list, prevOrder, nextOrder);
    this.store.dispatch(new Reorder({ prevOrder, nextOrder }));
  }
}
