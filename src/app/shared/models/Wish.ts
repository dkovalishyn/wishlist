export class Wish {
  description: string;
  title: string;
  tags: string[];
  _id: string;

  constructor(wish?: {
    description?: string,
    title?: string,
    tags?: string[],
  }) {
    this.description = wish.description || '';
    this.title = wish.title || '';
    this.tags = wish.tags || [];
  }

  toString() {
    return `${this.title}, ${this.description}`;
  }

  valueOf() {
    return `${this.title}, ${this.description}`;
  }
}
