import { Component, OnInit } from '@angular/core';
import { SliderConfig } from 'shared/models/Field';
import { FormGroup } from '@angular/forms';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'app-form-slider',
  template: `
    <div class="form-slider">
      <div class="form-slider__label">
        {{ field.placeholder }}
      </div>
      <mat-slider
        class="form-slider__input"
        [disabled]="field.disabled"
        [invert]="field.invert"
        [min]="field.min"
        [max]="field.max"
        [step]="field.step"
        [thumbLabel]="field.thumbLabel"
        [tickInterval]="field.tickInterval"
        [vertical]="field.vertical"
        [displayWith]="field.displayWith"
        (input)="onInput($event)"
        [value]="control.value"
      >
      </mat-slider>
    </div>
  `,
  styleUrls: ['./form-slider.component.scss']
})
export class FormSliderComponent implements OnInit {
  field: SliderConfig;
  group: FormGroup;

  constructor() {}

  ngOnInit() {}

  onInput(event: MatSliderChange) {
    this.control.setValue(event.value);
  }

  get control() {
    return this.group.get(this.field.name);
  }
}
