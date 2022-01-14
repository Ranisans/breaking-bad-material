/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { CATEGORY } from '../constants/api';

const name = 'category';
const initialState = {
  category: CATEGORY[0],
};

export const categorySlice = createSlice({
  name,
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload ? CATEGORY[1] : CATEGORY[0];
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
