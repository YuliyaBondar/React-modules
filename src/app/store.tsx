import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appReducer/appReducerSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rickandmortyApi } from '../services/rickandmorty';

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickandmortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
