import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from '../field';
import { FormGroup } from '@angular/forms';
import { FieldControlService } from '../field-control.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FieldControlService]
})
export class FormComponent implements OnInit {
  @Input() fields: Field<any>[] = [];
  @Input() initialValues: {} = {};
  @Output() onSubmit = new EventEmitter<any>();
  form: FormGroup;
  payLoad = '';

  constructor(private fieldControlService: FieldControlService) { }

  ngOnInit() {
    console.log(this.fields);
    this.form = this.fieldControlService.toFormGroup(this.fields);
  }

  submit(e) {
      e.preventDefault();
      this.payLoad = JSON.stringify(this.form.value);
      this.onSubmit.emit(this.form.value);
  }

}
