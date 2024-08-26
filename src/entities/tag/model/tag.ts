import type {ITag, TagConstructorParams} from '../types';

class Tag implements ITag {
  public name: string;

  constructor(params: TagConstructorParams) {
    const {name} = params;

    this.name = name;
  }
}

export {Tag};
