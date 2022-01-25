import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './categorySlice';
import characterReducer from './characterSlice';
import characterListReducer from './characterListSlice';
import charactersGalleryReducer from './charactersGallerySlice';

export default configureStore({
  reducer: {
    category: categoryReducer,
    character: characterReducer,
    characterList: characterListReducer,
    gallery: charactersGalleryReducer,
  },
});
