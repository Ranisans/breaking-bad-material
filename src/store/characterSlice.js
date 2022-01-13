/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getCharacterData } from '../api';
import * as status from '../constants/thunkStatus';

const name = 'character';
const initialState = {
  characterData: {},
  status: status.IDLE,
};

export const loadCharacterData = createAsyncThunk(
  `${name}/loadCharacterData`,
  async (id) => {
    const data = await getCharacterData(id);
    return data;
  }
);

export const characterSlice = createSlice({
  name,
  initialState,
  reducers: {
    reset(state) {
      state.characterData = {};
      state.status = status.IDLE;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadCharacterData.pending, (state) => {
        state.characterData = {};
        state.status = status.IDLE;
      })
      .addCase(loadCharacterData.fulfilled, (state, action) => {
        state.characterData = action.payload;
        state.status = status.SUCCEEDED;
      })
      .addCase(loadCharacterData.rejected, (store) => {
        store.status = status.FAILED;
      });
  },
});

export const { reset } = characterSlice.actions;
export default characterSlice.reducer;
