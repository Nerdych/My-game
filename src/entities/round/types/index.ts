import type {PayloadAction} from '@reduxjs/toolkit';
import type {IRound} from '../model/round';

type RoundType = 'default' | 'final';

type Actions = {
  editRound: PayloadAction<IRound>;
};

export type {Actions, RoundType};
