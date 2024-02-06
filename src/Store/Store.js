import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './Counter/CounterSlice';

export default configureStore({
  reducer: {
    counter: CounterSlice,
  },
})