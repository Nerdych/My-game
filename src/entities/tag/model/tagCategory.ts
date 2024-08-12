import type {Tag} from './tag';

interface ITagCategory {
  name: string;
  tags: Tag[];
}

type ConstructorParams = Pick<ITagCategory, 'name' | 'tags'>;

class TagCategory implements ITagCategory {
  public name: string;
  public tags: Tag[];

  constructor(params: ConstructorParams) {
    const {name, tags} = params;

    this.name = name;
    this.tags = tags;
  }
}

export {TagCategory};
