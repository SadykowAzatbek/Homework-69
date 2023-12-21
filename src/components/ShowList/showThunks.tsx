import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {showState} from './showSlice';
import {arrayShow} from './showListSlice';

export const showList = createAsyncThunk<void, showState>(
  'show list',
  async (arg, {dispatch}) => {
    const url = 'https://api.tvmaze.com/search/shows?q=';
    const {value } = arg;

    const response = await axios.get<showState[]>(url + value);

    dispatch(arrayShow(response.data));
  },
);