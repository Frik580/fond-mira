import { PATH } from "@/shared/Constants";
import {
    setLinkAboutus,
    setLinkContacts,
    setLinkDocuments,
    setLinkHome,
    setLinkNewslist,
    setLinkPartners,
    setLinkProjectslist
} from "@/store/reducers/linkSlice";
import { setValueNavPopup } from "@/store/reducers/popupSlice";

export default function handleLinkState(path: string, dispatch: any) {
    dispatch(setValueNavPopup(false));
    dispatch(setLinkHome());
    path === PATH.ABOUT_US && dispatch(setLinkAboutus(true));
    path === PATH.NEWS && dispatch(setLinkNewslist(true));
    path === PATH.OUR_PROJECTS && dispatch(setLinkProjectslist(true));
    path === PATH.PARTNERS && dispatch(setLinkPartners(true));
    path === PATH.DOCUMENTS && dispatch(setLinkDocuments(true));
    path === PATH.CONTACTS && dispatch(setLinkContacts(true));
}
