import { Injectable } from '@angular/core';
import { Field } from './field';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

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
