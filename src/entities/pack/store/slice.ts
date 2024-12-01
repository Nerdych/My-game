import {createSlice} from '@reduxjs/toolkit';
import type {PackActionsParams, PackState} from '../types';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: PackState = {
  name: 'REDUX',
  author: '',
  difficulty: 'easy',
  roundIds: [],
};

const packSlice = createSlice({
  name: 'pack',
  initialState,
  reducers: {
    editInfo: (state, action: PayloadAction<PackActionsParams['editInfo']>) => {
      const {name, difficulty, author, file} = action.payload;

      state.name = name;
      state.author = author;
      state.difficulty = difficulty;
      state.file = file;
    },

    addRound: (state, action: PayloadAction<PackActionsParams['addRound']>) => {
      state.roundIds.push(action.payload);
    },

    deleteRound: (state, action: PayloadAction<PackActionsParams['deleteRound']>) => {
      state.roundIds.filter((roundId) => roundId !== action.payload);
    },
  },
});

export default packSlice;
export type {PackState};
