import { Injectable } from '@angular/core';
import { Field } from './field';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FieldControlService {

  constructor() { }

  toFormGroup(fields: Field<any>[]) {
    const group: any = {};

    fields.forEach(field => {
      group[field.name] = field.required
        ? new FormControl(field.value || '', Validators.required)
        : new FormControl(field.value || '');
    });

    return new FormGroup(group);
  }

}
