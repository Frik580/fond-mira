import { PATH } from "@/shared/Constants";
import { useAppDispatch } from "@/shared/hooks/redux";
import unfixedBody from "@/shared/lib/UnfixedBody";
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
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useRouting(value: null | boolean, path: string) {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const pathname = usePathname();

    function handleLinkState(path: string) {
        dispatch(setValueNavPopup(false));
        dispatch(setLinkHome());
        path === PATH.ABOUT_US && dispatch(setLinkAboutus(true));
        path === PATH.NEWS && dispatch(setLinkNewslist(true));
        path === PATH.OUR_PROJECTS && dispatch(setLinkProjectslist(true));
        path === PATH.PARTNERS && dispatch(setLinkPartners(true));
        path === PATH.DOCUMENTS && dispatch(setLinkDocuments(true));
        path === PATH.CONTACTS && dispatch(setLinkContacts(true));
    }

    useEffect(() => {
        if (value === null) {
            return
        }

        unfixedBody();

        if (path === PATH.DOCUMENTS) {
            router.push(path);
            handleLinkState(path);
        } else {
            if (pathname !== "/") {
                router.push("/");
                handleLinkState(path);
            } else {
                handleLinkState(path);
            }
        }

    }, [value, path]);
}