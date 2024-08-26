import type {PayloadAction} from '@reduxjs/toolkit';
import type {IPack} from '../model/pack';

type PackDifficulty = 'hard' | 'medium' | 'easy';

type Actions = {
  editInfo: PayloadAction<Omit<IPack, 'roundIds'>>;
  addRound: PayloadAction<number>;
  deleteRound: PayloadAction<number>;
};

export type {PackDifficulty, Actions};
