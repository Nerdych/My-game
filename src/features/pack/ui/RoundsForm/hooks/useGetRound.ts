import {createSelector} from 'reselect';
import {useStore} from '@app/store';
import type {RootState} from '@app/store';
import type {IRound} from '@entities/round';

const getRoundMap = (state: RootState) => state.roundReducer.map;
const getRoundId = (_: RootState, roundId: number) => roundId;
const getRoundById = createSelector([getRoundMap, getRoundId], (map, roundId) => map[roundId]);

const useGetRound = (roundId: IRound['id']) => {
  const round = useStore((state) => getRoundById(state, roundId));
  return round;
};

export {useGetRound};
