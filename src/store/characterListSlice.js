/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  getCharacterCount,
  getCharacterListOffset,
  findCharacterByName,
} from '../api';
import * as status from '../constants/thunkStatus';
import { CATEGORY, LIMIT } from '../constants/api';

const name = 'characterList';
const initialState = {
  category: CATEGORY[0],
  pageCount: 0,
  page: 1,
  characterList: [],
  status: status.IDLE,
};

export const loadCharacterList = createAsyncThunk(
  `${name}/loadCharacterList`,
  async (category, page) => {
    const data = getCharacterListOffset(category, page);
    return data;
  }
);

export const loadCharacterCount = createAsyncThunk(
  `${name}/loadCharacterCount`,
  async (category) => {
    const data = getCharacterCount(category);
    return data;
  }
);

export const loadCharacterByName = createAsyncThunk(
  `${name}/loadCharacterByName`,
  async (category, searchString) => {
    const data = findCharacterByName(category, searchString);
    return data;
  }
);

export const characterListSlice = createSlice({
  name,
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload ? CATEGORY[1] : CATEGORY[0];
      state.status = status.IDLE;
    },
    nextPage(state) {
      if (state.page < state.pageCount - 1) {
        state.page += 1;
      }
    },
    previousPage(state) {
      if (state.page > 2) {
        state.page -= 1;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadCharacterCount.pending, (state) => {
        state.status = status.LOADING;
        state.characterList = [];
      })
      .addCase(loadCharacterCount.fulfilled, (state, action) => {
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
      })
      .addCase(loadCharacterByName.pending, (state) => {
        state.status = status.LOADING;
        state.characterList = [];
      })
      .addCase(loadCharacterByName.fulfilled, (state, action) => {
        state.characterList = action.payload;
        state.status = status.SUCCEEDED;
      })
      .addCase(loadCharacterByName.rejected, (state) => {
        state.status = status.FAILED;
      });
  },
});

export const { setCategory } = characterListSlice.actions;
export default characterListSlice.reducer;
