import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationsPageComponent } from './containers/notifications-page/notifications-page.component';

const routes = [
{ path: 'notifications', component: NotificationsPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class NotificationRoutingModule { }
