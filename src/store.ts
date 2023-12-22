import {configureStore} from '@reduxjs/toolkit';
import {showReducer} from './components/ShowList/showSlice';
import {showListReducer} from './components/ShowList/showListSlice';
import {showDataReducer} from './components/ShowList/showDataSlice';

export const store = configureStore({
  reducer: {
    show: showReducer,
    showList: showListReducer,
    showData: showDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;