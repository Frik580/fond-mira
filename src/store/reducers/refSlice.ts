import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type RefState = {
    // value: HTMLDivElement | null,
    value: any,
}

const initialState: RefState = {
    value: null,
}

export const refSlice = createSlice({
    name: 'ref',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<HTMLDivElement | null>) => {
            state.value = action.payload 
        },
    },
})

export const { setValue } = refSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const setRef = (state: RootState) => state.ref.value

export default refSlice.reducer