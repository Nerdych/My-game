import type {FirstParametersFunctions} from '@shared/lib/utilityTypes';
import type {IRound} from '../model/round';

type RoundType = 'default' | 'final';

type RoundActions = {
  editRound: (info: IRound) => void;
};

type RoundActionsParams = FirstParametersFunctions<RoundActions>;

type RoundState = {
  map: Record<IRound['id'], IRound>;
};

export type {RoundActions, RoundType, RoundState, RoundActionsParams};
