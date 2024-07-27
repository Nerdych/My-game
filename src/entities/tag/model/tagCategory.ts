import type {Tag} from './tag';

export class TagCategory {
  public name: string;
  public tags: Tag[];

  constructor(name: string, tags: Tag[]) {
    this.name = name;
    this.tags = tags;
  }
}
