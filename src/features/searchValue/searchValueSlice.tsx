import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface searchValueState {
  value: string;
}

const initialState: searchValueState = {
  value: '',
};

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    handleSearchChange: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { handleSearchChange } = searchValueSlice.actions;

export default searchValueSlice.reducer;
