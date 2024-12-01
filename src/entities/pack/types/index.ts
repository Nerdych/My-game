import type {FirstParametersFunctions} from '@shared/lib/utilityTypes';
import type {IPack} from '../model/pack';

type PackDifficulty = 'hard' | 'medium' | 'easy';

type PackActions = {
  editInfo: (info: Omit<IPack, 'roundIds'>) => void;
  addRound: (roundId: number) => void;
  deleteRound: (roundId: number) => void;
};

type PackActionsParams = FirstParametersFunctions<PackActions>;

type PackState = IPack;

export type {PackDifficulty, PackActionsParams, PackActions, PackState};
