import {Category} from '@entities/category';

type Difficulty = 'default' | 'final';

interface IRound {
  name: string;
  difficulty: Difficulty;
  categories: Category[];
}

type ConstructorParams = Pick<IRound, 'name' | 'categories' | 'difficulty'>;

class Round implements IRound {
  name: string;
  difficulty: Difficulty;
  categories: Category[];

  constructor(params: ConstructorParams) {
    const {name, difficulty, categories} = params;

    this.name = name;
    this.difficulty = difficulty;
    this.categories = categories;
  }
}

export {Round};
