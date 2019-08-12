import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { view, lensPath } from 'ramda';

import { FieldConfig, FieldType } from 'shared/models/Field';
import { FormGroup } from '@angular/forms';
import { ChipListComponent } from '../components/chip-list/chip-list.component';
import { FileInputComponent } from '../components/file-input/file-input.component';
import { FormButtonComponent } from '../components/form-button/form-button.component';
import { FormInputComponent } from '../components/form-input/form-input.component';
import { FormDropdownComponent } from '../components/form-dropdown/form-dropdown.component';
import { FormSliderComponent } from 'shared/components/forms/components/form-slider/form-slider.component';
import {TextAreaComponent} from "app/shared/components/forms/components/text-area/text-area.component";

const componentMapper = {
  [FieldType.ChipList]: ChipListComponent,
  [FieldType.FileInput]: FileInputComponent,
  [FieldType.Button]: FormButtonComponent,
  [FieldType.Input]: FormInputComponent,
  [FieldType.Dropdown]: FormDropdownComponent,
  [FieldType.Slider]: FormSliderComponent,
  [FieldType.Textarea]: TextAreaComponent,
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: any;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
