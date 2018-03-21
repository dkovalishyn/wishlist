import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {WishEditorComponent} from '../components/wish-editor/wish-editor.component';
import {WishlistComponent} from '../components/wishlist/wishlist.component';
import {WishComponent} from '../components/wish/wish.component';

const routes = [
  { path: '', component: WishlistComponent, pathMatch: 'full' },
  { path: 'wish/edit', component: WishEditorComponent },
  { path: 'wish/:id', component: WishComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
