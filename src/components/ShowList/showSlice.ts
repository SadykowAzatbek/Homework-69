import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface showState {
  value: string;
}

const initialState: showState = {
  value: '',
};

export const showSlice = createSlice({
  name: 'show value',
  initialState,
  reducers: {
    valueInfo: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      console.log(action.payload);
    },
  }
});

export const showReducer = showSlice.reducer;
export const {valueInfo} = showSlice.actions;