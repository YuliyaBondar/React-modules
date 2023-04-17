import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IResults } from '../../utils/interfaces';

export interface cardsCreatorState {
  value: IResults[];
}

const initialState: cardsCreatorState = {
  value: [],
};

export const cardsCreatorSlice = createSlice({
  name: 'cardsCreator',
  initialState,
  reducers: {
    cardsCreator: (state, action: PayloadAction<IResults>) => {
      state.value.push(action.payload);
    },
  },
});

export const { cardsCreator } = cardsCreatorSlice.actions;

export default cardsCreatorSlice.reducer;
