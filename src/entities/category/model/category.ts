interface ICategory {
  name: string;
}

type ConstructorParams = {
  name: string;
};

class Category implements ICategory {
  name: string;

  constructor(params: ConstructorParams) {
    const {name} = params;

    this.name = name;
  }
}

export {Category};
