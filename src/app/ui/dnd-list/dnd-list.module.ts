import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
  imports: [
    CommonModule,
    NgDragDropModule.forRoot(),
  ],
  declarations: []
})
export class DndListModule { }
