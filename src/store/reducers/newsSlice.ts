import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { NewsType } from '@/shared/models/Models'

interface State {
    value: number | undefined
    news: NewsType[]
}

const initialState: State = {
    value: undefined,
    news: []
}

export const newsSlice = createSlice({
    name: 'news',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setNewsHight: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
        setNewsList: (state, action: PayloadAction<NewsType[]>) => {
            state.news = action.payload
        },
    },
})

export const {
    setNewsHight,
    setNewsList
} = newsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const newsState = (state: RootState) => state.news

export default newsSlice.reducer