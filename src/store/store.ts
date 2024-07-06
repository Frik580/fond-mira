import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import linkReduser from './reducers/linkSlice'
import loadedRefReduser from './reducers/loadedRefSlice'
import headerReduser from './reducers/headerSlice'
import popupReduser from './reducers/popupSlice'
import photoReduser from './reducers/photoSlice'
import projectReduser from './reducers/projectSlice'
import newsReduser from './reducers/newsHightSlice'
import { newsAPI } from '@/shared/services/NewsService'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        link: linkReduser,
        loadedRef: loadedRefReduser,
        header: headerReduser,
        popup: popupReduser,
        project: projectReduser,
        news: newsReduser,
        photo: photoReduser,
        [newsAPI.reducerPath]: newsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch