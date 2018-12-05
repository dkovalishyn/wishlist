import { Field } from './Field';

export class TextBox extends Field<string> {
  controlType = 'textbox';
  type: string;
  placeholder: string;
  minlength: number;
  maxlength: number;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.placeholder = options['placeholder'] || '';
    this.minlength = options['minlength'] || 0;
    this.maxlength = options['maxlength'] || 255;
  }
}
