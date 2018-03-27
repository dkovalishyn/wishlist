import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input()  contentTemplate: TemplateRef<any>;
  @Input()  backLink: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(): void {
    this.router.navigate([this.backLink]);
  }
}
