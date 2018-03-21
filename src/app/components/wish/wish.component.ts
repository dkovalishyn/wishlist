import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {WishService} from '../../services/wish.service';
import {Wish} from '../../models/wish';
import {Observable} from 'rxjs/Observable';

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
    private service: WishService,
  ) { }

  ngOnInit() {
    this.wish$ = this.route.paramMap.switchMap((params: ParamMap) => (
      this.service.getWish(params.get('id'))
    ));
  }

}
