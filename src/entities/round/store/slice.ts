import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RoundActionsParams, RoundState} from '../types';

const initialState: RoundState = {
  map: {},
};

export const roundSlice = createSlice({
  name: 'round',
  initialState,
  reducers: {
    addRound: (state) => {
      state.map[0] = {id: 0, name: `Round ${0}`, type: 'default', categoryIds: []};
    },

    editRound: (state, action: PayloadAction<RoundActionsParams['editRound']>) => {
      const {id, name, type} = action.payload;
      const round = state.map[id];

      if (!round) {
        return;
      }

      round.name = name;
      round.type = type;
    },
  },
});

export default roundSlice;
export type {RoundState};
