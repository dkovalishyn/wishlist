import {DynamicFieldDirective} from './dynamic-field.directive';
import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {FieldConfig, FieldType} from '../../../models/Field';
import {FormGroup, Validators} from '@angular/forms';

@Component({
  template: `
    <ng-container appDynamicField [field]="field" [group]="group"></ng-container>
  `
})
class TestComponent {
  group: FormGroup;
  field: FieldConfig = {
    type: FieldType.Input,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Is required'
      }
    ],
    inputType: 'text',
    collection: [],
    label: 'Input label',
    name: 'input',
    id: 'input',
    value: 'value',
  }
}

describe('DynamicFieldDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [DynamicFieldDirective, TestComponent] });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'))
  });
  it('should dynamically create an input', () => {
    expect(inputEl).toBeTruthy();
  });
});
