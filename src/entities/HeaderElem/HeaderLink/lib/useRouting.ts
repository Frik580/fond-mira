import { PATH } from "@/shared/Constants";
import { useAppDispatch } from "@/shared/hooks/redux";
import unfixedBody from "@/shared/lib/UnfixedBody";
import { setValueHeader } from "@/store/reducers/headerSlice";
import {
    setLinkAboutus,
    setLinkContacts,
    setLinkDocuments,
    setLinkHelp,
    setLinkHome,
    setLinkLuch,
    setLinkNewslist,
    setLinkPartners,
    setLinkProjectslist,
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
        path === PATH.HELP && dispatch(setLinkHelp(true));
        path === PATH.LUCH && dispatch(setLinkLuch(true));
    }

    useEffect(() => {
        if (value === null) {
            return;
        }

        if (
            path === PATH.DOCUMENTS ||
            path === PATH.HELP ||
            path === PATH.LUCH
        ) {
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

        dispatch(setValueHeader(null));
        unfixedBody();
    }, [value, path]);
}
