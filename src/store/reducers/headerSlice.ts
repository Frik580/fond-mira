import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type HeaderState = {
    value: boolean | null,
}

const initialState: HeaderState = {
    value: null,
}

export const headerSlice = createSlice({
    name: 'headerVisibility',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setValueHeader: (state, action: PayloadAction<boolean | null>) => {
            state.value = action.payload 
        },
    },
})

export const { setValueHeader } = headerSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const headerState = (state: RootState) => state.header.value

export default headerSlice.reducer