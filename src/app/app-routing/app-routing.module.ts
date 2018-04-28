import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'login', loadChildren: 'app/core/auth.module#AuthModule' },
  { path: 'wish', loadChildren: 'app/wish/wish.module#WishModule' },
  { path: '', redirectsTo: 'wish' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
