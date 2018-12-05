import {Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() backLink: string;
  @Input() title: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(): void {
    this.router.navigate([this.backLink]);
  }
}
