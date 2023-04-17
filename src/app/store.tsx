import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from '../features/searchValue/searchValueSlice';
import cardsCreatorReducer from '../features/cardsCreator/cardsCreatorSlice';

export const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    cardsCreator: cardsCreatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
