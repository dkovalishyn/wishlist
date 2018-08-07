import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';
import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationsListComponent } from './components/notifications-list/notifications-list.component';
import { NotificationsPageComponent } from './containers/notifications-page/notifications-page.component';
import { EffectsModule } from '@ngrx/effects';
import { NotificationsEffects } from './store/effects';
import { NotificationsService } from './services/notifications.service';
import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MatListModule,
    StoreModule.forFeature('notifications', reducer),
    EffectsModule.forFeature([NotificationsEffects]),
  ],
  providers: [
    NotificationsService,
  ],
  declarations: [NotificationsListComponent, NotificationsPageComponent]
})
export class NotificationsModule { }
