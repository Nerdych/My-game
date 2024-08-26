import type {RoundType} from '../types';

interface IRound {
  id: number;
  name: string;
  type: RoundType;
  categoryIds: number[];
}

export type {IRound};
