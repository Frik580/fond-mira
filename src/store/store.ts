import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import linkReduser from './reducers/linkSlice'
import headerReduser from './reducers/headerSlice'
import popupReduser from './reducers/popupSlice'
import photoReduser from './reducers/photoSlice'
import projectReduser from './reducers/projectSlice'
import newsReduser from './reducers/newsSlice'
import { newsAPI } from '@/shared/services/NewsService'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        link: linkReduser,
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