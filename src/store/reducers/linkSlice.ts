import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type LinkState = {
    home: boolean,
    aboutus: boolean,
    newslist: boolean,
    projectslist: boolean,
    partners: boolean,
    documents: boolean,
    contacts: boolean,
}

const initialState: LinkState = {
    home: false,
    aboutus: false,
    newslist: false,
    projectslist: false,
    partners: false,
    documents: false,
    contacts: false,
}

export const linkSlice = createSlice({
    name: 'link',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setLinkHome: (state) => {
            state.home = true
            state.aboutus = false
            state.newslist = false
            state.projectslist = false
            state.partners = false
            state.documents = false
            state.contacts = false
        },
        setLinkAboutus: (state, action: PayloadAction<boolean>) => {
            // state.home = false
            state.aboutus = action.payload
            // state.newslist = false
            // state.projectslist = false
            // state.partners = false
            // state.documents = false
            // state.contacts = false
        },
        setLinkNewslist: (state, action: PayloadAction<boolean>) => {
            // state.home = false
            // state.aboutus = false
            state.newslist = action.payload
            // state.projectslist = false
            // state.partners = false
            // state.documents = false
            // state.contacts = false
        },
        setLinkProjectslist: (state, action: PayloadAction<boolean>) => {
            // state.home = false
            // state.aboutus = false
            // state.newslist = false
            state.projectslist = action.payload
            // state.partners = false
            // state.documents = false
            // state.contacts = false
        },
        setLinkPartners: (state, action: PayloadAction<boolean>) => {
            // state.home = false
            // state.aboutus = false
            // state.newslist = false
            // state.projectslist = false
            state.partners = action.payload
            // state.documents = false
            // state.contacts = false
        },
        setLinkDocuments: (state, action: PayloadAction<boolean>) => {
            // state.home = false
            // state.aboutus = false
            // state.newslist = false
            // state.projectslist = false
            // state.partners = false
            state.documents = action.payload
            // state.contacts = false
        },
        setLinkContacts: (state, action: PayloadAction<boolean>) => {
            // state.home = false
            // state.aboutus = false
            // state.newslist = false
            // state.projectslist = false
            // state.partners = false
            // state.documents = action.payload
            state.contacts = action.payload
        },
    },
})

export const {
    setLinkHome,
    setLinkAboutus,
    setLinkNewslist,
    setLinkProjectslist,
    setLinkPartners,
    setLinkDocuments,
    setLinkContacts
} = linkSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const setLinkState = (state: RootState) => state.link

export default linkSlice.reducer