import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../../models/Field';
import { TextBox } from '../../../../models/TextBox';
import { DropDown } from '../../../../models/DropDown';

@Component({
  selector: 'app-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent {
  @Input() field: Field<any> | TextBox | DropDown;
  @Input() form: FormGroup;

  constructor() { }

  get isValid() {
    return this.form.controls[this.field.name].valid;
  }

  asTextBox(field): TextBox {
    return field;
  }

  asDropDown(field): DropDown {
    return field;
  }
}
