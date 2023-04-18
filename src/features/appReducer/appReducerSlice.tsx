import { combineReducers, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IResults } from '../../utils/interfaces';
import { rickandmortyApi } from '../../services/rickandmorty';

export interface appReducerState {
  searchValue: string;
  cards: IResults[];
  characters: IResults[];
}

const initialState: appReducerState = {
  searchValue: '',
  cards: [],
  characters: [],
};

export const appReducerSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    cardsCreator: (state, action: PayloadAction<IResults>) => {
      state.cards.push(action.payload);
    },
    handleSearchChange: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    charactersCreator: (state, action: PayloadAction<IResults[]>) => {
      state.characters = [...action.payload];
    },
  },
});

const appReducer = combineReducers({
  store: appReducerSlice.reducer,
  [rickandmortyApi.reducerPath]: rickandmortyApi.reducer,
});

export const { cardsCreator, handleSearchChange, charactersCreator } = appReducerSlice.actions;

export default appReducer;
