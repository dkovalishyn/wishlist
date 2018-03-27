import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Wish } from '../../models/wish';
import { WishService } from '../../services/wish.service';
import { MessageService } from '../../services/message.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import { finalize } from 'rxjs/operators';
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

  private wishId: string;
  backLink = '/';

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
      .switchMap((params: ParamMap) => {
        this.wishId = params.get('id');
        this.backLink = `wish/${this.wishId}`;
        return this.wishService.getWish(this.wishId);
      });
    this.wish$.subscribe(
      (wish: Wish) => { this.fields = this.formService.getFields(wish); }
    );
  }

  onSubmit(payLoad) {
    const update$ = this.wishService
      .updateWish(Object.assign({ _id: this.wishId}, payLoad))
      .pipe(
        finalize(() => this.location.back())
      );

    update$
      .subscribe(
        wish => this.messageService.add(`Wish updated: ${wish}`),
        e => this.messageService.error(e),
      );

  }
}
