import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field';

@Component({
  selector: 'app-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent {
  @Input() field: Field<any>;
  @Input() form: FormGroup;

  constructor() { }

  get isValid() {
    return this.form.controls[this.field.name].valid;
  }
}
