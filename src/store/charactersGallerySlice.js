/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getCharactersGalleryData } from '../api';
import * as status from '../constants/thunkStatus';

const name = 'charactersGallery';
const initialState = {
  galleryData: [],
  status: status.IDLE,
};

export const loadCharactersGallery = createAsyncThunk(
  `${name}/loadCharactersGallery`,
  async (category) => {
    const data = await getCharactersGalleryData(category);
    return data;
  }
);

export const charactersGallerySlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadCharactersGallery.pending, (state) => {
        state.galleryData = [];
        state.status = status.LOADING;
      })
      .addCase(loadCharactersGallery.fulfilled, (state, action) => {
        state.galleryData = action.payload;
        state.status = status.SUCCEEDED;
      })
      .addCase(loadCharactersGallery.rejected, (state) => {
        state.status = status.FAILED;
      });
  },
});

export default charactersGallerySlice.reducer;
