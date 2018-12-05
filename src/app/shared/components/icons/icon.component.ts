import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import '../../../../assets/menu.svg';

@Component({
  selector: 'app-icon',
  template: `<mat-icon [svgIcon]="name"></mat-icon>`,
})
export class IconComponent {
  @Input() name: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/menu.svg'));
  }
}
