import { configureStore } from '@reduxjs/toolkit'
import watchLaterReducer from './watchLaterSlice'

export const store = configureStore({
  reducer: {
    watchLaterReducer: watchLaterReducer,
  },
})