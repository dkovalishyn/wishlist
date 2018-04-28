import { Component, Input, OnInit, Output } from '@angular/core';
import { Wish } from '../../models/wish';
import { Field } from '../../../ui/forms/models/field';

@Component({
  selector: 'app-wish-form',
  templateUrl: './wish-form.component.html',
  styleUrls: ['./wish-form.component.css']
})
export class WishFormComponent implements OnInit {
  @Input() wish: Wish;
  @Input() backLink: string;
  @Input() field: Field<any>[];
  @Output() onSubmit;

  constructor() { }

  ngOnInit() {
  }

}
