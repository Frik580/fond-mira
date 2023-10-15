import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type PopupState = {
    valueNav: boolean,
    valueNews: boolean,
}

const initialState: PopupState = {
    valueNav: false,
    valueNews: false,
}

export const popupSlice = createSlice({
    name: 'popup',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setValueNavPopup: (state, action: PayloadAction<boolean>) => {
            state.valueNav = action.payload 
        },
        setValueNewsPopup: (state, action: PayloadAction<boolean>) => {
            state.valueNews = action.payload 
        },
    },
})

export const { setValueNavPopup, setValueNewsPopup } = popupSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const popupValue = (state: RootState) => state.popup

export default popupSlice.reducer