interface ITag {
  name: string;
}

type ConstructorParams = Pick<ITag, 'name'>;

class Tag implements ITag {
  public name: string;

  constructor(params: ConstructorParams) {
    const {name} = params;

    this.name = name;
  }
}

export {Tag};
