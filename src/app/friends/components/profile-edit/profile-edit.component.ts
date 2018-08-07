import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Field } from '../../../models/field';
import { ProfileEditFormService } from '../../services/profile-edit-form.service';
import { Person } from '../../../models/Person';
import { Observable } from 'rxjs/Observable';
import { State } from '../../../store/reducer';
import { Store } from '@ngrx/store';
import { getUserProfile } from '../../../core/auth/store/selectors';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  profile$: Observable<Person>;
  fields: Field<any>[] = [];

  constructor(
    private formService: ProfileEditFormService,
    private location: Location,
    private store: Store<State>,
  ) {
    this.profile$ = this.store.select(getUserProfile);
  }

  ngOnInit() {
    this.profile$.subscribe(profile => {
      this.fields = this.formService.getFields(profile);
    });
  }

  onSubmit(payLoad) {
   console.log(payLoad);
  }

  onCancel() {
    this.location.back();
  }
}
