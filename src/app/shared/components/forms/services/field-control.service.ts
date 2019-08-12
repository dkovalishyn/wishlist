import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FieldControlService {

  constructor() { }

  toFormGroup(fields: any) {
    const group: any = {};

    fields.forEach(field => {
      group[field.name] = new FormControl(field.value || '', field.validators);
    });

    return new FormGroup(group);
  }

}
