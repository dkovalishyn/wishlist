import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { filter, find, propEq, reject } from 'ramda';

import { FieldConfig, FieldType } from 'shared/models/Field';

import { FieldControlService } from '../../services/field-control.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FieldControlService]
})
export class FormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];
  @Input() initialValues: Record<string, any> = {};
  @Input() header: string;

  @Output() onSubmit = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();

  form: FormGroup;
  payLoad = '';

  constructor(private fb: FormBuilder, private location: Location) {}

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      const initialValue = this.initialValues[field.name];
      const validators = this.bindValidations(field.validations || []);
      switch (field.type) {
        case FieldType.Button:
          return;
        case FieldType.ChipList: {
          const fieldArray = this.fb.array(initialValue || []);
          group.addControl(field.name, fieldArray);
          return;
        }
        default: {
          const control = this.fb.control(initialValue, validators);
          group.addControl(field.name, control);
          return;
        }
      }
    });

    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  ngOnInit() {
    this.form = this.createControl();
  }

  submit(e) {
    e.preventDefault();
    e.stopPropagation();

    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  cancel() {
    this.location.back();
  }

  get inputs() {
    return reject(({ type }) => [FieldType.Button, FieldType.FileInput].includes(type), this.fields);
  }

  get buttons() {
    return filter(propEq('type', FieldType.Button), this.fields);
  }

  get filePicker() {
    return find(propEq('type', FieldType.FileInput), this.fields);
  }

  get contentClass() {
    const modifier = this.filePicker ? 'dynamic-form__content--with-file-picker' : '';
    return `dynamic-form__content ${modifier}`;
  }
}
