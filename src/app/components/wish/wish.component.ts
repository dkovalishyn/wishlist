import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {WishService} from '../../services/wish.service';
import {Wish} from '../../models/wish';
import {Observable} from 'rxjs/Observable';
import {MessageService} from '../../services/message.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
  wish$: Observable<Wish>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wishService: WishService,
    private messageService: MessageService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.wish$ = this.route.paramMap.switchMap((params: ParamMap) => (
      this.wishService.getWish(params.get('id'))
    ));
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
