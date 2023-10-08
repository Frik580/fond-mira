import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type PopupState = {
    value: boolean,
    valueNews: boolean,
}

const initialState: PopupState = {
    value: false,
    valueNews: false,
}

export const popupSlice = createSlice({
    name: 'popup',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setValuePopup: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload 
        },
        setValueNewsPopup: (state, action: PayloadAction<boolean>) => {
            state.valueNews = action.payload 
        },
    },
})

export const { setValuePopup, setValueNewsPopup } = popupSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const popupValue = (state: RootState) => state.popup

export default popupSlice.reducer