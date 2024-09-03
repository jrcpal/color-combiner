import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './colorSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    colors: colorReducer,
    search: searchReducer,
  },
});

export default store;
