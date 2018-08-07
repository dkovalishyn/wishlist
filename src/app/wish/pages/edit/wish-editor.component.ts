import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Wish } from '../../../models/wish';
import { filter, switchMap } from 'rxjs/operators';
import { WishFormService } from '../../services/wish-form.service';
import { Field } from '../../../models/field';
import { getWishById } from '../../store/selectors';
import { Store } from '@ngrx/store';
import { GetWishes } from '../../store/actions/getAll';
import { State } from '../../../store/reducer';
import { actionTypes as editActions, EditWish } from '../../store/actions/edit';
import { WishEffects } from '../../store';

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
              private location: Location,
              private router: Router,
              private formService: WishFormService,
              private store: Store<State>,
              private wishEffects: WishEffects,
              ) {
    this.fields = this.formService.getFields();
    this.wishEffects.editWish$.pipe(
      filter(({ type }) => type === editActions.SUCCESS)
    ).subscribe(() => this.close());
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.wishId = params.get('id');
          this.backLink = `wish/${this.wishId}`;
          return this.store.select(getWishById(this.wishId));
        })
      )
      .subscribe((wish: Wish) => {
        if (!wish) {
          this.store.dispatch(new GetWishes());
        }

        return this.fields = this.formService.getFields(wish);
      });
  }

  onSubmit(payLoad) {
    this.store.dispatch(new EditWish(Object.assign({ _id: this.wishId }, payLoad)));
  }

  onCancel() {
    this.location.back();
  }

  close = () => {
    this.router.navigateByUrl('/').then(() => null);
  }
}
