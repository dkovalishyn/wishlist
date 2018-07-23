import { ValidatorFn } from '@angular/forms';

export class Field<T> {
  value: T;
  id: string;
  name: string;
  label: string;
  validators: ValidatorFn[];
  order: number;
  controlType: string;

  constructor(options: {
    value?: T,
    id?: string,
    name?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    validators?: ValidatorFn[],
  } = {}) {
    this.value = options.value;
    this.name = options.name || '';
    this.id = options.id || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.validators = options.validators;
  }
}
