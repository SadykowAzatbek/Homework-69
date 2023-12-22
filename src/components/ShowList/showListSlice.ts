import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {showData} from "./showDataSlice";
import {showList} from './showThunks';

export interface showList {
  list: showData[];
  isLoading: boolean;
}

const initialState: showList = {
  list: [],
  isLoading: false,
};

export const showListSlice = createSlice({
  name: 'show list',
  initialState,
  reducers: {
    arrayShow: (state, action: PayloadAction<showData[]>) => {
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(showList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(showList.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(showList.rejected, (state) => {
      state.isLoading = false;
    });

  }
});

export const showListReducer = showListSlice.reducer;
export const {arrayShow} = showListSlice.actions;