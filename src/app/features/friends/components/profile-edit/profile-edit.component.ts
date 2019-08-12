import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Person } from 'shared/models/Person';
import { AppState } from 'store/reducer';
import { Store } from '@ngrx/store';
import { getUserProfile } from '../../../core/auth/store/selectors';
import { FieldConfig, FieldType } from 'shared/models/Field';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  profile: Person;
  fields: FieldConfig[] = [
    {
      type: FieldType.Input,
      inputType: 'text',
      class: 'profile-edit__first-name',
      name: 'firstName',
      value: this.profile.firstName || '',
      placeholder: 'First name',
      validations: []
    },
    {
      type: FieldType.Input,
      inputType: 'text',
      class: 'profile-edit__last-name',
      name: 'lastName',
      value: this.profile.lastName || '',
      placeholder: 'Last name',
      validations: []
    },
    {
      type: FieldType.FileInput,
      class: 'profile-edit__avatar',
      name: 'avatar'
    }
  ];

  constructor(private location: Location, private store: Store<AppState>) {
    this.store.select(getUserProfile).subscribe(profile => this.profile = profile);
  }

  ngOnInit() {
  }

  onSubmit(payLoad) {
    console.log(payLoad);
  }

  onCancel() {
    this.location.back();
  }
}
