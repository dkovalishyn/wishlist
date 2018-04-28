import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { FormComponent } from './components/form/form.component';
import { FieldControlService } from './services/field-control.service';
import { Field } from './models/field';
import { TextBox } from './models/text-box';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicFieldComponent,
    FormComponent,
  ],
  providers: [
    FieldControlService,
  ],
  exports: [
    Field,
    TextBox,
  ]
})
export class FormsModule { }
