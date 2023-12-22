import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface showData {
  show: {
    id: string;
    name: string;
    image: string;
  }
}

export interface arrayShow {
  dataArray: showData[];
}

const initialState: arrayShow = {
  dataArray: [],
};

export const showDataSlice = createSlice({
  name: 'showData',
  initialState,
  reducers: {
    showDataArr: (state, action: PayloadAction<showData[]>) => {
      state.dataArray = action.payload;
    },
  },
});

export const showDataReducer = showDataSlice.reducer;
export const {showDataArr} = showDataSlice.actions;