export interface Validator {
  name: string;
  validator: any;
  message: string;
}

export enum FieldType {
  ChipList,
  FileInput,
  Button,
  Input,
  Dropdown,
  Slider,
  Textarea
}

export type ChipListConfig = DefaultFieldConfig & {
  selectable?: boolean;
  removable?: boolean;
  addOnBlur?: boolean;
};

export type DropdownConfig = DefaultFieldConfig & {
  options: [{ key: string; value: string }];
};

export type InputConfig = DefaultFieldConfig & {
  inputType: string;
};

export type SliderConfig = DefaultFieldConfig & {
  invert?: boolean;
  max?: number;
  min?: number;
  step?: number;
  thumbLabel?: boolean;
  tickInterval?: 'auto' | number;
  vertical?: boolean;
  displayWith?: (value: number) => string;
};

export type DefaultFieldConfig = {
  type: FieldType;
  name?: string;
  id?: string;
  class?: string;
  placeholder?: string;
  value?: any;
  disabled?: boolean;
  validations?: Validator[];
};

export type FieldConfig = DefaultFieldConfig | SliderConfig | InputConfig | DropdownConfig | ChipListConfig;
