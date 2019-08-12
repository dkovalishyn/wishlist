import { Component, OnInit } from '@angular/core';
import {InputConfig} from "shared/models/Field";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  field: InputConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
