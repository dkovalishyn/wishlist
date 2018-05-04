import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { FormComponent } from './components/form/form.component';
import { FieldControlService } from './services/field-control.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DynamicFieldComponent,
    FormComponent,
  ],
  providers: [
    FieldControlService,
  ],
  exports: [
    FormComponent,
    DynamicFieldComponent,
  ],
})
export class DynamicFormsModule { }
