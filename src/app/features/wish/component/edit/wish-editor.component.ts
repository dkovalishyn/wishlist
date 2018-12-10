import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { WishFormService } from '../../services/wish-form.service';
import { Field } from '../../../../shared/models/Field';
import { getWishById } from '../../store/selectors';
import { ActionsSubject, Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducer';
import { actionTypes, EditWish } from '../../store/actions/edit';
import { Subscription } from 'rxjs';
import { ofType } from '@ngrx/effects';

@Component({
  selector: 'app-wish-editor',
  templateUrl: './wish-editor.component.html',
  providers: [WishFormService]
})
export class WishEditorComponent implements OnInit, OnDestroy {
  fields: Field<any>[] = [];
  wishId: string;
  backLink = '/';
  actionsSubscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              private formService: WishFormService,
              private store: Store<AppState>,
              private actionsSubject: ActionsSubject,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      mergeMap((params: ParamMap) => {
        this.wishId = params.get('id');
        return this.store.select(getWishById(this.wishId));
      })
    ).subscribe(wish => this.fields = this.formService.getFields(wish));
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

  onSubmit(payLoad) {
    const wish = {
      ...payLoad,
      _id: this.wishId,
      tags: payLoad.tags
    };
    this.store.dispatch(new EditWish(wish));
    this.actionsSubscription = this.actionsSubject.pipe(
      ofType(actionTypes.SUCCESS)
    ).subscribe(() => this.location.back());
  }

  onCancel() {
    this.location.back();
  }

  close = () => {
    this.router.navigateByUrl('/').then(() => null);
  }
}
