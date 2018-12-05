import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishAddComponent } from './component/add/wish-add.component';
import { WishEditorComponent } from './component/edit/wish-editor.component';
import { WishComponent } from './component/details/wish.component';
import { WishContainerComponent } from './containers/wish-container/wish-container.component';

const wishRoutes: Routes = [
  {
    path: 'wish',
    component: WishContainerComponent,
    children: [
      { path: 'add', component: WishAddComponent },
      { path: ':id', component: WishComponent },
      { path: ':id/edit', component: WishEditorComponent, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(wishRoutes)
  ],
  declarations: [],
  exports: [RouterModule],
})
export class WishRoutingModule {
}
