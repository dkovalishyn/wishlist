export class Wish {
  description: string;
  _id: string;

  constructor(wish?: {
    description?: string
  }) {
    this.description = wish.description || '';
  }

  toString() {
    return this.description;
  }
}
