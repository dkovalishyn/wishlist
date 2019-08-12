import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FieldControlService } from './services/field-control.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule, MatSliderModule} from '@angular/material';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ChipListComponent } from './components/chip-list/chip-list.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { FormDropdownComponent } from './components/form-dropdown/form-dropdown.component';
import { FormSliderComponent } from './components/form-slider/form-slider.component';
import { TextAreaComponent } from './components/text-area/text-area.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatSliderModule,
  ],
  declarations: [
    FormComponent,
    FormInputComponent,
    ChipListComponent,
    FileInputComponent,
    FormButtonComponent,
    FormDropdownComponent,
    FormButtonComponent,
    DynamicFieldDirective,
    FormSliderComponent,
    TextAreaComponent
  ],
  entryComponents: [
    FormInputComponent,
    ChipListComponent,
    FileInputComponent,
    FormDropdownComponent,
    FormButtonComponent,
    FormSliderComponent,
    TextAreaComponent,
  ],
  providers: [FieldControlService],
  exports: [FormComponent]
})
export class DynamicFormsModule {}
