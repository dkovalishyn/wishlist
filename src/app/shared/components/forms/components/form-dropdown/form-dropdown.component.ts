import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from 'shared/models/Field';

export type DropdownConfig = FieldConfig & {
  options: [{ key: string; value: string }];
}

@Component({
  selector: 'app-form-dropdown',
  template: `
    <ng-container [formGroup]="group">
      <select [id]="field.id" [formControlName]="field.name" class="dynamic-form__select">
        <option *ngFor="let option of field.options" [value]="option.key">{{ option.value }}</option>
      </select>
    </ng-container>
  `,
  styles: []
})
export class FormDropdownComponent implements OnInit {
  field: DropdownConfig;
  group: FormGroup;

  constructor() {}

  ngOnInit() {}
}
