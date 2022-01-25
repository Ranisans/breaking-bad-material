/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getCharactersGalleryData, findCharacterByName } from '../api';
import * as status from '../constants/thunkStatus';

const name = 'charactersGallery';
const initialState = {
  galleryData: [],
  status: status.IDLE,
};

export const loadCharactersGallery = createAsyncThunk(
  `${name}/loadCharactersGallery`,
  async (searchString, thunkAPI) => {
    const state = thunkAPI.getState();
    let data;
    if (searchString === undefined || searchString === '') {
      const { category } = state.category;
      data = getCharactersGalleryData(category);
    } else data = findCharacterByName(searchString);
    data = await data;
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
