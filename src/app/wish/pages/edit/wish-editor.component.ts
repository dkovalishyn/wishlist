import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Wish } from '../../models/wish';
import { WishService } from '../../services/wish.service';

import { Observable } from 'rxjs/Rx';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { WishFormService } from '../../services/wish-form.service';
import { Field } from '../../../ui/forms/models/field';
import { MessageService } from '../../../core/log/services/message.service';

@Component({
  selector: 'app-wish-editor',
  templateUrl: './wish-editor.component.html',
  providers: [WishFormService]
})
export class WishEditorComponent implements OnInit {
  fields: Field<any>[] = [];
  wishId: string;
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
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.wishId = params.get('id');
          this.backLink = `wish/${this.wishId}`;
          return this.wishService.getWish(this.wishId);
        })
      )
      .subscribe((wish: Wish) => this.fields = this.formService.getFields(wish));
  }

  onSubmit(payLoad) {
    this.wishService
      .updateWish(Object.assign({ _id: this.wishId }, payLoad))
      .pipe(finalize(() => this.location.back()))
      .subscribe(wish => this.messageService.add(`Wish updated: ${wish}`));
  }
}
