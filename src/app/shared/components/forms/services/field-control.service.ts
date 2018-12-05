import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Field } from '../../../models/Field';

@Injectable()
export class FieldControlService {

  constructor() { }

  toFormGroup(fields: Field<any>[]) {
    const group: any = {};

    fields.forEach(field => {
      group[field.name] = new FormControl(field.value || '', field.validators);
    });

    return new FormGroup(group);
  }

}
