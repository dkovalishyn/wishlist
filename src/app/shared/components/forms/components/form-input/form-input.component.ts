import { Component, OnInit } from '@angular/core';
import { InputConfig } from 'shared/models/Field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  template: `
    <mat-form-field [formGroup]="group" class="form-input">
      <input
        matInput
        class="dynamic-form__input"
        [formControlName]="field.name"
        [type]="field.inputType"
        [id]="field.id"
        [name]="field.name"
        [placeholder]="field.placeholder"
      />
      <ng-container *ngFor="let validation of field.validations" ngProjectAs="mat-error">
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{ validation.message }}</mat-error>
      </ng-container>
    </mat-form-field>
  `,
  styles: ['.form-input { width: 100% }']
})
export class FormInputComponent implements OnInit {
  field: InputConfig;
  group: FormGroup;

  constructor() {}

  ngOnInit() {}
}
