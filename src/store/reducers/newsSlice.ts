import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { NewsType } from '@/shared/models/Models'

const initialState = {
    post: {
        _id: '',
        createdAt: '',
        title: '',
        slug: '',
        tags: [],
        preview: '',
        article: [],
        photo: 0,
        video: [],
    }
}

export const newsSlice = createSlice({
    name: 'news',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setNews: (state, action: PayloadAction<NewsType>) => {
            state.post = action.payload
        },
    },
})

export const {
    setNews
} = newsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const newsState = (state: RootState) => state.news.post

export default newsSlice.reducer