import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {showState} from './showSlice';
import {arrayShow} from './showListSlice';
import {showDataArr, showData} from './showDataSlice';

export const showList = createAsyncThunk<void, showState>(
  'show list',
  async (arg, {dispatch}) => {
    const url = 'https://api.tvmaze.com/search/shows?q=';
    const {value } = arg;

    const response = await axios.get<showData[]>(url + value);

    dispatch(arrayShow(response.data));
  },
);

export const showInfo = createAsyncThunk<void, {value: string | undefined}>(
  'show data',
  async (arg, {dispatch}) => {
    const {value} = arg;
    const showUrl = 'https://api.tvmaze.com/shows/';

    const response = await axios.get<showData[]>(showUrl + value);

    dispatch(showDataArr(response.data));
  },
);