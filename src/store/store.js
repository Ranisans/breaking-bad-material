import { configureStore } from '@reduxjs/toolkit';

import characterReducer from './characterSlice';
import characterListReducer from './characterListSlice';

export default configureStore({
  reducer: {
    character: characterReducer,
    characterList: characterListReducer,
  },
});
