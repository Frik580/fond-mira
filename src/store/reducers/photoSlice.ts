import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { StaticImageData } from 'next/image'

type PhotoState = {
    value: string | StaticImageData,
}

const initialState: PhotoState = {
    value: '',
}

export const photoSlice = createSlice({
    name: 'photo',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setValuePhoto: (state, action: PayloadAction<string | StaticImageData>) => {
            state.value = action.payload 
        },
    },
})

export const { setValuePhoto } = photoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const photoState = (state: RootState) => state.photo.value

export default photoSlice.reducer