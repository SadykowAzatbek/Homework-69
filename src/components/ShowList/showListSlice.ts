import {showState} from './showSlice';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface showList {
  list: showState[];
}

const initialState: showList = {
  list: [],
};

export const showListSlice = createSlice({
  name: 'show list',
  initialState,
  reducers: {
    arrayShow: (state, action: PayloadAction<showState[]>) => {
      state.list = action.payload;
    },
  }
});

export const showListReducer = showListSlice.reducer;
export const {arrayShow} = showListSlice.actions;