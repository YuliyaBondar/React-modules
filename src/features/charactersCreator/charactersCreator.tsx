import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IResults } from '../../utils/interfaces';

export interface charactersCreatorState {
  value: IResults[];
}

const initialState: charactersCreatorState = {
  value: [],
};

export const charactersCreatorSlice = createSlice({
  name: 'charactersCreator',
  initialState,
  reducers: {
    charactersCreator: (state, action: PayloadAction<IResults[]>) => {
      state.value = [...action.payload];
    },
  },
});

export const { charactersCreator } = charactersCreatorSlice.actions;

export default charactersCreatorSlice.reducer;
