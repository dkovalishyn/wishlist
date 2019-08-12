import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from 'shared/models/Field';


@Component({
  selector: 'app-form-button',
  template: `
    <ng-container [formGroup]="group">
      <button mat-raised-button color="primary" type="submit">
        {{field.placeholder}}
      </button>
    </ng-container>
  `,
  styles: []
})
export class FormButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() {}

  ngOnInit() {}
}
