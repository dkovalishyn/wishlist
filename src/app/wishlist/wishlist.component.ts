import { Component, OnInit } from '@angular/core';
import { WishService } from '../wish.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private wishService: WishService) { }

  ngOnInit() {
  }

}
