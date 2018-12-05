import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../../../shared/components/icons/icons.module';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    IconsModule,
  ],
  declarations: [HeaderComponent, ProfileMenuComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {
}
