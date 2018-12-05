export class DragEvent extends Event {
  dragData: any;

  constructor(args) {
    super(args);
    this.dragData = {};
  }
}
