import {createSelector} from 'reselect';
import {useStore} from '@app/store';
import type {RootStore} from '@app/store';
import type {IRound} from '@entities/round';

const getRoundMap = (state: RootStore) => state.roundReducer.map;
const getRoundId = (_: RootStore, roundId: number) => roundId;
const getRoundById = createSelector([getRoundMap, getRoundId], (map, roundId) => map[roundId]);

const useGetRound = (roundId: IRound['id']) => {
  const round = useStore((state) => getRoundById(state, roundId));
  return round;
};

export {useGetRound};
