import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from '../features/searchValue/searchValueSlice';
import cardsCreatorReducer from '../features/cardsCreator/cardsCreatorSlice';
import charactersCreatorReducer from '../features/charactersCreator/charactersCreator';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    cardsCreator: cardsCreatorReducer,
    charactersCreator: charactersCreatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
