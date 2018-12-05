import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDragDropModule } from 'ng-drag-drop';
import { DndListComponent } from './dnd-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgDragDropModule.forRoot(),
  ],
  declarations: [
    DndListComponent,
  ],
  exports: [
    DndListComponent,
    NgDragDropModule,
  ]
})
export class DndListModule { }
