import {createSlice} from '@reduxjs/toolkit';
import type {IPack} from '../model/pack';
import type {Actions} from '../types';

type PackState = IPack;

const initialState: PackState = {
  name: '',
  author: '',
  difficulty: 'easy',
  roundIds: [],
};

const packSlice = createSlice({
  name: 'pack',
  initialState,
  reducers: {
    editInfo: (state, action: Actions['editInfo']) => {
      const {name, difficulty, author} = action.payload;

      state.name = name;
      state.author = author;
      state.difficulty = difficulty;
    },

    addRoundId: (state, action: Actions['addRound']) => {
      state.roundIds.push(action.payload);
    },

    deleteRoundId: (state, action: Actions['deleteRound']) => {
      state.roundIds.filter((roundId) => roundId !== action.payload);
    },
  },
});

export const {editInfo, addRoundId, deleteRoundId} = packSlice.actions;
export default packSlice.reducer;
