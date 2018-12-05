import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { HeaderModule } from '../../core/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    HeaderModule,
    RouterModule,
  ],
  declarations: [
    SidePanelComponent,
  ],
  exports: [SidePanelComponent],
})
export class SideNavModule { }
