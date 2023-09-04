import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import refReduser from './reducers/refSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ref: refReduser,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch