export class Wish {
  description: string;
  title: string;
  tags: string[];
  next: string;
  image: string;
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
    this.image = wish.imageUrl || '';
  }

  toString() {
    return `${this.title}, ${this.description}`;
  }

  valueOf() {
    return `${this.title}, ${this.description}`;
  }
}
