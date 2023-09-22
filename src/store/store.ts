import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import linkReduser from './reducers/linkSlice'
import headerReduser from './reducers/headerSlice'
import popupReduser from './reducers/popupSlice'
import projectReduser from './reducers/projectSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        link: linkReduser,
        header: headerReduser,
        popup: popupReduser,
        project: projectReduser,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch