import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { WishService } from '../../services/wish.service';
import { Wish } from '../../../../shared/models/Wish';
import { MessageService } from '../../../core/log/services/message.service';
import { finalize, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getWishById } from '../../store/selectors';
import { GetWishes } from '../../store/actions/getAll';
import { AppState } from '../../../../store/reducer';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  wish: Wish;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wishService: WishService,
    private messageService: MessageService,
    private location: Location,
    private store: Store<AppState>,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.store.select(getWishById(params.get('id'))
      )
    )).subscribe(wish => {
      if (!wish) {
        this.store.dispatch(new GetWishes());
      }
      this.wish = wish;
    });
  }

  deleteWish(wish: Wish) {
    this.wishService.deleteWish(wish._id)
      .pipe(
        finalize(() => this.router.navigate(['/']))
      )
      .subscribe(
        () => this.location.back(),
        e => this.messageService.error(e),
      );
  }
}
