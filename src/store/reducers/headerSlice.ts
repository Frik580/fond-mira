import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type HeaderState = {
    value: boolean,
}

const initialState: HeaderState = {
    value: true,
}

export const headerSlice = createSlice({
    name: 'header',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setValueHeader: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload 
        },
    },
})

export const { setValueHeader } = headerSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const headerValue = (state: RootState) => state.header.value

export default headerSlice.reducer