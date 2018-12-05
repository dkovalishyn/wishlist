import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { equals } from 'ramda';
import { FieldControlService } from '../../services/field-control.service';
import { Field } from '../../../../models/Field';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FieldControlService]
})
export class FormComponent implements OnInit {
  @Input() fields: Field<any>[] = [];
  @Input() submitLabel = 'Submit';
  @Input() title: string;
  form: FormGroup;
  @Output() onSubmit = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();
  payLoad = '';

  constructor(private fieldControlService: FieldControlService,
              private location: Location) {
  }

  ngOnInit() {
    this.form = this.fieldControlService.toFormGroup(this.fields);
  }

  submit(e) {
    e.preventDefault();
    this.onSubmit.emit(this.form.value);
  }

  cancel() {
    this.location.back();
  }
}