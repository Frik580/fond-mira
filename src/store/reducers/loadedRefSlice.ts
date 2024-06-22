import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type LoadedRefState = {
    aboutus: boolean,
    newslist: boolean,
    projectslist: boolean,
    partners: boolean,
    documents: boolean,
    contacts: boolean,
}

const initialState: LoadedRefState = {
    aboutus: false,
    newslist: false,
    projectslist: false,
    partners: false,
    documents: false,
    contacts: false,
}

export const loadedRefSlice = createSlice({
    name: 'loadedRef',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setLoadedRefNewslist: (state, action: PayloadAction<boolean>) => {
            state.newslist = action.payload
        },
    },
})

export const { setLoadedRefNewslist } = loadedRefSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const loadedRefState = (state: RootState) => state.loadedRef

export default loadedRefSlice.reducer