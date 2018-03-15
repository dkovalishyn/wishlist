import { Component } from '@angular/core';
import {Wish} from '../../models/wish';
import {DragEvent} from '../../models/dragEvent';

@Component({
  selector: 'app-dnd-list',
  templateUrl: './dnd-list.component.html',
  styleUrls: ['./dnd-list.component.css']
})
export class DndListComponent {
  list = [];
  constructor() { }

  private findItem({ _id: itemId }: Wish): number {
    return this.list.findIndex(({ _id }) => _id === itemId);
  }

  private deleteItem(index: number): Wish {
    return this.list.splice(index, 1)[0];
  }

  private insertItem(index: number, item: Wish) {
    this.deleteItem(this.findItem(item));
    this.list.splice(index, 0, item);
  }

  onDrop(e: DragEvent, i: number) {
    this.insertItem(i , e.dragData);
  }
}
