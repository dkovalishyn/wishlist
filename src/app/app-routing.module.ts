import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/wish',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
