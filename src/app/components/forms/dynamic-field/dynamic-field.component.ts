import { Component, Input } from '@angular/core';
import { Field } from '../field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent {
  @Input() field: Field<any>;
  @Input() form: FormGroup;

  constructor() { }

  get isValid() {
    return this.form.controls[this.field.name].valid;
  }
}
