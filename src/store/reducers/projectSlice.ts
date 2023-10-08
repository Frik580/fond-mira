import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

const initialState = {
    projects: []
}

export const projectSlice = createSlice({
    name: 'project',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setProject: (state, action: PayloadAction<any>) => {
            state.projects = action.payload
        },
    },
})

export const {
    setProject
} = projectSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const projectState = (state: RootState) => state.project.projects

export default projectSlice.reducer