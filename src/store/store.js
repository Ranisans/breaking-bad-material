import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './categorySlice';
import characterReducer from './characterSlice';
import characterListReducer from './characterListSlice';
import characterFilterReducer from './characterFilterSlice';
import charactersGalleryReducer from './charactersGallerySlice';

export default configureStore({
  reducer: {
    category: categoryReducer,
    character: characterReducer,
    characterList: characterListReducer,
    characterFilter: characterFilterReducer,
    gallery: charactersGalleryReducer,
  },
});
