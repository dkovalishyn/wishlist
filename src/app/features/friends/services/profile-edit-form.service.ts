import { Injectable } from '@angular/core';
import { Field } from '../../../shared/models/Field';
import { Person } from '../../../shared/models/Person';
import { TextBox } from '../../../shared/models/TextBox';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditFormService {
  getFields(profile?: Person): Field<any>[] {
    const fields: Field<any>[] = [
      new TextBox({
        key: 'profile-edit__first-name',
        name: 'firstName',
        value: profile ? profile.firstName : '',
        placeholder: 'First name',
        validators: [],
        order: 1,
      }),
      new TextBox({
        key: 'profile-edit__last-name',
        name: 'lastName',
        value: profile ? profile.lastName : '',
        placeholder: 'Last name',
        validators: [],
        order: 2,
      }),
    ];

    return fields.sort((a, b) => a.order - b.order);
  }
}
