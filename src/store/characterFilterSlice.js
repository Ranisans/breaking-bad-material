/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { findCharacterByName } from '../api';
import * as status from '../constants/thunkStatus';

const name = 'characterFilter';
const initialState = {
  status: status.IDLE,
  characterList: [],
};

export const loadCharacterByName = createAsyncThunk(
  `${name}/loadCharacterByName`,
  async (searchString) => {
    const data = await findCharacterByName(searchString);
    return data;
  }
);

export const characterFilterSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadCharacterByName.pending, (state) => {
        state.status = status.LOADING;
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

export default characterFilterSlice.reducer;
