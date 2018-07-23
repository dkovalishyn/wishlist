import { Component, Input, OnInit } from '@angular/core';
import { WishService } from '../../services/wish.service';
import { Wish } from '../../../models/wish';
import { DndListComponent } from '../../../ui/dnd-list/dnd-list.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent extends DndListComponent implements OnInit {
  @Input() list: Wish[];

  constructor(private wishService: WishService) {
    super();
  }

  ngOnInit() {
    this.getWishes();
  }

  getWishes() {
    this.wishService.getWishes().subscribe( wishes => this.list = wishes );
  }

}
