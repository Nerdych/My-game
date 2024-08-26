import type {PackDifficulty} from '../types';

interface IPack {
  name: string;
  author: string;
  difficulty: PackDifficulty;
  roundIds: number[];
}

export type {IPack};
