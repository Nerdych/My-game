import {Round} from '@entities/round';

const roundsData: Round[] = [
  {name: 'Раунд 1', difficulty: 'default', categories: [{name: 'Категория 1'}, {name: 'Категория 2'}]},
  {
    name: 'Раунд 2',
    difficulty: 'default',
    categories: [{name: 'Категория 1'}, {name: 'Категория 2'}, {name: 'Категория 3'}],
  },
  {name: 'Раунд 3', difficulty: 'final', categories: [{name: 'Категория 1'}]},
];

export const rounds: Round[] = roundsData.map((roundData) => new Round(roundData));
