export class Wish {
  description: string;
  title: string;
  occasion: string;
  _id: string;

  constructor(wish?: {
    description?: string,
    title?: string,
    occasion?: string,
  }) {
    this.description = wish.description || '';
    this.title = wish.title || '';
    this.occasion = wish.occasion || '';
  }

  toString() {
    return `${this.title}, ${this.description}`;
  }

  valueOf() {
    return `${this.title}, ${this.description}`;
  }
}
