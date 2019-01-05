import { Field } from './Field';

export class FileInput extends Field<string> {
  controlType = 'file';
}
