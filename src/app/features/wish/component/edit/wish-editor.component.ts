import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Wish } from '../../../../shared/models/Wish';
import { filter, switchMap } from 'rxjs/operators';
import { WishFormService } from '../../services/wish-form.service';
import { Field } from '../../../../shared/models/Field';
import { getWishById } from '../../store/selectors';
import { Store } from '@ngrx/store';
import { State } from '../../../../store/reducer';
import { actionTypes as editActions, EditWish } from '../../store/actions/edit';
import { WishEffects } from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wish-editor',
  templateUrl: './wish-editor.component.html',
  providers: [WishFormService]
})
export class WishEditorComponent implements OnInit {
  fields: Field<any>[] = [];
  wishId: string;
  wish$: Observable<Wish>;
  backLink = '/';

  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              private formService: WishFormService,
              private store: Store<State>,
              private wishEffects: WishEffects,
              ) {
    this.wishEffects.editWish$.pipe(
      filter(({ type }) => type === editActions.SUCCESS)
    ).subscribe(() => this.close());
  }

  ngOnInit() {
    this.fields = this.formService.getFields();
    this.wish$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
          this.wishId = params.get('id');
          return this.store.select(getWishById(this.wishId));
        })
      );
    this.wish$.subscribe(wish => {
      this.fields = this.formService.getFields(wish);
    });
  }

  onSubmit(payLoad) {
    const wish = {
      ...payLoad,
      _id: this.wishId,
      tags: payLoad.tags.replace(', ', ',').split(',')
    };
    this.store.dispatch(new EditWish(wish));
  }

  onCancel() {
    this.location.back();
  }

  close = () => {
    this.router.navigateByUrl('/').then(() => null);
  }
}
