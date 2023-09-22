import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ProjectType } from '@/shared/Constants'

const initialState: ProjectType = {
    id: null,
    year: 0,
    title: '',
    preview: '',
    src: '',
    partner: '',
    href: '',
    photo: 0,
}

export const projectSlice = createSlice({
    name: 'project',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
   
        setProjectKtoYesliNeTy: (state, action: PayloadAction<ProjectType>) => {
            state = action.payload
        },
        setProjectMayskiyVals: (state, action: PayloadAction<ProjectType>) => {
            state = action.payload
        },
        setProjectMyIMir: (state, action: PayloadAction<ProjectType>) => {
            state = action.payload
        },
        setProjectPermVelikaya: (state, action: PayloadAction<ProjectType>) => {
            state = action.payload
        },
        setProjectProDobro: (state, action: PayloadAction<ProjectType>) => {
            state = action.payload
        },
        setProjectRyabinovayaAlleya: (state, action: PayloadAction<ProjectType>) => {
            state = action.payload
        },
    },
})

export const {
    setProjectKtoYesliNeTy,
    setProjectMayskiyVals,
    setProjectMyIMir,
    setProjectPermVelikaya,
    setProjectProDobro,
    setProjectRyabinovayaAlleya
} = projectSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const projectState = (state: RootState) => state.project

export default projectSlice.reducer