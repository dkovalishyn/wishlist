import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { Field } from './Field';

export class TagsEditor extends Field<string[]> {
  controlType = 'tags-editor';
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeyCodes: number[] = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.value.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  remove(tag: string): void {
    const index = this.value.indexOf(tag);

    if (index >= 0) {
      this.value.splice(index, 1);
    }
  }
}
