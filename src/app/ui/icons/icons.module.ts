import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [IconComponent],
  imports: [MatIconModule],
  exports: [IconComponent],
})
export class IconsModule {
  constructor() {}
}
