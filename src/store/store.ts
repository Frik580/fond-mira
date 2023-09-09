import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import linkReduser from './reducers/linkSlice'
import headerReduser from './reducers/headerSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        link: linkReduser,
        header: headerReduser,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch