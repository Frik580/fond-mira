import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface HightState {
    value: number
}

const initialState: HightState = {
    value: 100
}

export const newsSlice = createSlice({
    name: 'news',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setNews: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
    },
})

export const {
    setNews
} = newsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const newsState = (state: RootState) => state.news.value

export default newsSlice.reducer