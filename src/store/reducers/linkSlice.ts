import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type LinkState = {
    home: boolean;
    aboutus: boolean;
    newslist: boolean;
    projectslist: boolean;
    partners: boolean;
    documents: boolean;
    contacts: boolean;
    help: boolean;
    luch: boolean;
};

const initialState: LinkState = {
    home: false,
    aboutus: false,
    newslist: false,
    projectslist: false,
    partners: false,
    documents: false,
    contacts: false,
    help: false,
    luch: false,
};

export const linkSlice = createSlice({
    name: "link",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setLinkHome: (state) => {
            state.home = false;
            state.aboutus = false;
            state.newslist = false;
            state.projectslist = false;
            state.partners = false;
            state.documents = false;
            state.contacts = false;
            state.help = false;
            state.luch = false;
        },
        setLinkAboutus: (state, action: PayloadAction<boolean>) => {
            state.aboutus = action.payload;
        },
        setLinkNewslist: (state, action: PayloadAction<boolean>) => {
            state.newslist = action.payload;
        },
        setLinkProjectslist: (state, action: PayloadAction<boolean>) => {
            state.projectslist = action.payload;
        },
        setLinkPartners: (state, action: PayloadAction<boolean>) => {
            state.partners = action.payload;
        },
        setLinkDocuments: (state, action: PayloadAction<boolean>) => {
            state.documents = action.payload;
        },
        setLinkContacts: (state, action: PayloadAction<boolean>) => {
            state.contacts = action.payload;
        },
        setLinkHelp: (state, action: PayloadAction<boolean>) => {
            state.help = action.payload;
        },
        setLinkLuch: (state, action: PayloadAction<boolean>) => {
            state.luch = action.payload;
        },
    },
});

export const {
    setLinkHome,
    setLinkAboutus,
    setLinkNewslist,
    setLinkProjectslist,
    setLinkPartners,
    setLinkDocuments,
    setLinkContacts,
    setLinkHelp,
    setLinkLuch,
} = linkSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const linkState = (state: RootState) => state.link;

export default linkSlice.reducer;
