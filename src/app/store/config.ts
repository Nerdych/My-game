import {configureStore} from '@reduxjs/toolkit';
import {roundReducer} from '@entities/round';
import {packReducer} from '@entities/pack';

export const store = configureStore({
  reducer: {
    packReducer,
    roundReducer,
  },
});
