/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getCharacterCount, getCharacterListOffset } from '../api';
import * as status from '../constants/thunkStatus';
import { LIMIT } from '../constants/api';

const name = 'characterList';
const initialState = {
  pageCount: 0,
  page: 0,
  numberOfCharacters: 0,
  characterList: [],
  status: status.IDLE,
};

export const loadCharacterList = createAsyncThunk(
  `${name}/loadCharacterList`,
  async ({ category, page }) => {
    const data = await getCharacterListOffset(category, page);
    return data;
  }
);

export const loadCharacterCount = createAsyncThunk(
  `${name}/loadCharacterCount`,
  async (category) => {
    const data = await getCharacterCount(category);
    return data;
  }
);

export const characterListSlice = createSlice({
  name,
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadCharacterCount.pending, (state) => {
        state.status = status.LOADING;
        state.characterList = [];
      })
      .addCase(loadCharacterCount.fulfilled, (state, action) => {
        state.numberOfCharacters = action.payload;
        state.pageCount = Math.ceil(action.payload / LIMIT);
      })
      .addCase(loadCharacterCount.rejected, (state) => {
        state.status = status.FAILED;
      })
      .addCase(loadCharacterList.pending, (state) => {
        state.status = status.LOADING;
        state.characterList = [];
      })
      .addCase(loadCharacterList.fulfilled, (state, action) => {
        state.characterList = action.payload;
        state.status = status.SUCCEEDED;
      })
      .addCase(loadCharacterList.rejected, (state) => {
        state.status = status.FAILED;
      });
  },
});

export const { setPage } = characterListSlice.actions;
export default characterListSlice.reducer;
