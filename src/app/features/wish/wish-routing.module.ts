import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishAddComponent } from './component/add/wish-add.component';
import { WishEditorComponent } from './component/edit/wish-editor.component';
import { DetailsComponent } from './component/details/details.component';
import { WishContainerComponent } from './containers/wish-container/wish-container.component';

const wishRoutes: Routes = [
  {
    path: 'wish',
    component: WishContainerComponent,
    children: [
      { path: 'add', component: WishAddComponent },
      { path: ':id', component: DetailsComponent },
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
