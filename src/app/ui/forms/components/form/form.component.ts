import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldControlService } from '../../services/field-control.service';
import { Field } from '../../models/field';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FieldControlService]
})
export class FormComponent implements OnInit {
  @Input() fields: Field<any>[] = [];
  @Input() initialValues: {} = {};
  @Input() submitLabel = 'Submit';
  @Output() onSubmit = new EventEmitter<any>();
  form: FormGroup;
  payLoad = '';

  constructor(private fieldControlService: FieldControlService) {
  }

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
