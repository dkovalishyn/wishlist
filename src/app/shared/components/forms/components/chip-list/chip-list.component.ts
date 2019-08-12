import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { ChipListConfig } from 'shared/models/Field';

@Component({
  selector: 'app-chip-list',
  template: `
    <mat-form-field [formGroup]="group" class="chip-list">
      <mat-chip-list class="tags-editor" #chipList>
        <mat-chip
          *ngFor="let control of fieldArray.controls; let i = index"
          [selectable]="field.selectable"
          [removable]="field.removable"
          (removed)="remove(i)"
        >
          {{ control.value }}
          <mat-icon matChipRemove *ngIf="field.removable">
            cancel
          </mat-icon>
        </mat-chip>
        <input
          [placeholder]="field.placeholder"
          [matChipInputFor]="chipList"
          [matChipInputSeparatorKeyCodes]="separatorKeyCodes"
          [matChipInputAddOnBlur]="field.addOnBlur"
          (matChipInputTokenEnd)="add($event)"
        />
      </mat-chip-list>
    </mat-form-field>
  `,
  styles: ['.chip-list { width: 100% }']
})
export class ChipListComponent implements OnInit {
  readonly separatorKeyCodes: number[] = [ENTER, COMMA];
  field: ChipListConfig;
  group: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.fieldArray.push(this.fb.control(value.trim()));
    }
    if (input) {
      input.value = '';
    }
  }

  remove(index: number): void {
    if (index >= 0) {
      this.fieldArray.removeAt(index);
    }
  }

  get fieldArray() {
    return this.group.get(this.field.name) as FormArray;
  }
}
