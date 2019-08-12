import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from 'shared/models/Field';

@Component({
  selector: 'app-file-input',
  template: `
    <ng-container [formGroup]="group">
      <img
        *ngIf="control.value; else pickFile"
        class="file-picker"
        alt="Selected file"
        [src]="control.value"
        (click)="fileInput.click()"
      />
      <input hidden (change)="onFileSelected()" #fileInput type="file" id="file" />
    </ng-container>
    <ng-template #pickFile>
        <button class="file-picker" (click)="fileInput.click()" type="button">
          Choose a picture
        </button>
    </ng-template>
  `,
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  @ViewChild('fileInput', { static: false }) inputNode;

  constructor() {}

  ngOnInit() {}

  onFileSelected() {
    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.control.setValue(e.target.result);
      };
      reader.readAsDataURL(this.inputNode.nativeElement.files[0]);
    }
  }

  get control() {
    return this.group.get(this.field.name);
  }
}
