import type {ITagCategory, TagCategoryConstructorParams} from '../types';
import type {Tag} from './tag';

class TagCategory implements ITagCategory {
  public name: string;
  public tags: Tag[];

  constructor(params: TagCategoryConstructorParams) {
    const {name, tags} = params;

    this.name = name;
    this.tags = tags;
  }
}

export {TagCategory};
