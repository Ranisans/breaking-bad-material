import { configureStore } from '@reduxjs/toolkit';

import characterReducer from './characterSlice';
import characterListReducer from './characterListSlice';
import charactersGalleryReducer from './charactersGallerySlice';

export default configureStore({
  reducer: {
    character: characterReducer,
    characterList: characterListReducer,
    gallery: charactersGalleryReducer,
  },
});
