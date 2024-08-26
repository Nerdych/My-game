import {createSlice} from '@reduxjs/toolkit';
import type {IRound} from '../model/round';
import type {Actions} from '../types';

type RoundState = {
  map: Record<IRound['id'], IRound>;
};

const initialState: RoundState = {
  map: {},
};

export const roundSlice = createSlice({
  name: 'round',
  initialState,
  reducers: {
    addRound: (state) => {
      state.map[length] = {id: length, name: `Round ${length}`, type: 'default', categoryIds: []};
    },

    editRound: (state, action: Actions['editRound']) => {
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

export const {editRound, addRound} = roundSlice.actions;
export default roundSlice.reducer;
