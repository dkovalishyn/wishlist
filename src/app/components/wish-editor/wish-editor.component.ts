import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Wish } from '../../models/wish';
import { WishService } from '../../services/wish.service';
import { MessageService } from '../../services/message.service';

import 'rxjs/add/operator/switchMap';
import { flatMap } from 'rxjs/operators';
import { WishFormService } from '../../services/wish-form.service';
import { Field } from '../forms/field';

@Component({
  selector: 'app-wish-editor',
  templateUrl: './wish-editor.component.html',
  styleUrls: ['./wish-editor.component.scss'],
  providers: [WishFormService]
})
export class WishEditorComponent implements OnInit {
  wish$: Observable<Wish>;
  fields: Field<any>[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private wishService: WishService,
              private messageService: MessageService,
              private location: Location,
              private formService: WishFormService) {
    this.fields = this.formService.getFields();
  }

  ngOnInit() {
    this.wish$ = this.route.paramMap
      .switchMap((params: ParamMap) => this.wishService.getWish(params.get('id')));
    this.wish$.subscribe(
      (wish: Wish) => { this.fields = this.formService.getFields(wish); }
    );
  }

  onSubmit(payLoad) {
    console.log('update wish', payLoad);
    const update$ = this.wish$.pipe(
      flatMap((wish: Wish) => this.wishService.updateWish(Object.assign(wish, payLoad))),
    );
    update$.subscribe(
      wish => this.messageService.add(`Wish updated: ${wish}`),
      e => this.messageService.error(e),
      () => this.location.back()
    );
  }
}
