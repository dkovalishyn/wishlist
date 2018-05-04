import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { WishService } from '../../services/wish.service';
import { Wish } from '../../models/wish';
import { MessageService } from '../../../core/log/services/message.service';
import { finalize, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
  wish: Wish;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wishService: WishService,
    private messageService: MessageService,
    private location: Location,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.wishService.getWish(params.get('id'))
    )).subscribe(wish => this.wish = wish);
  }

  deleteWish(wish: Wish) {
    this.wishService.deleteWish(wish._id)
      .pipe(
        finalize(() => this.location.back())
      )
      .subscribe(
        () => this.location.back(),
        e => this.messageService.error(e),
      );
  }
}
