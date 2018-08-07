import { Field } from './field';

interface Option {
  key: string;
  value: string;
}

export class DropDown extends Field<string> {
  controlType = 'dropdown';
  options: Option[];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || '';
  }
}
