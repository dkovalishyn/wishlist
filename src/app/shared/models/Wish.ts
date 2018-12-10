export class Wish {
  description: string;
  title: string;
  tags: string[];
  next: string;
  imageUrl: string;
  imagePath: string;
  _id: string;

  constructor(wish?: {
    description?: string,
    title?: string,
    tags?: string[],
    imageUrl?: string,
    imagePath?: string,
  }) {
    this.description = wish.description || '';
    this.title = wish.title || '';
    this.tags = wish.tags || [];
    this.imageUrl = wish.imageUrl || '';
    this.imagePath = wish.imagePath || '';
  }

  toString() {
    return `${this.title}, ${this.description}`;
  }

  valueOf() {
    return `${this.title}, ${this.description}`;
  }
}
