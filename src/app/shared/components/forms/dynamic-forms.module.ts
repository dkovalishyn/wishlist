import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { FormComponent } from './components/form/form.component';
import { FieldControlService } from './services/field-control.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
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
