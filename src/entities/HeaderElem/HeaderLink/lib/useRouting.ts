import { PATH } from "@/shared/Constants";
import { useAppDispatch } from "@/shared/hooks/redux";
import unfixedBody from "@/features/FixedBody/UnfixedBody";
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
import { useEffect, useCallback, useMemo } from "react";

export default function useRouting(value: null | boolean, path: string) {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const pathname = usePathname();

    const linkActions = useMemo(() => ({
        [PATH.ABOUT_US]: setLinkAboutus,
        [PATH.NEWS]: setLinkNewslist,
        [PATH.OUR_PROJECTS]: setLinkProjectslist,
        [PATH.PARTNERS]: setLinkPartners,
        [PATH.DOCUMENTS]: setLinkDocuments,
        [PATH.CONTACTS]: setLinkContacts,
        [PATH.HELP]: setLinkHelp,
        [PATH.LUCH]: setLinkLuch,
    }), []);

    const handleLinkState = useCallback((path: string) => {
        dispatch(setValueNavPopup(false));
        dispatch(setLinkHome());

        const action = linkActions[path as keyof typeof linkActions];
        if (action) {
            dispatch(action(true));
        }
    }, [dispatch, linkActions]);

    useEffect(() => {
        const internalPaths = [PATH.DOCUMENTS, PATH.HELP, PATH.LUCH];
        const isInternalPath = internalPaths.includes(path as typeof PATH[keyof typeof PATH]);

        if (value === null) {
            return;
        }

        if (isInternalPath) {
            router.push(path);
        } else if (pathname !== "/") {
            router.push("/");
        }

        handleLinkState(path);
        dispatch(setValueHeader(null));
        unfixedBody();
    }, [value, path]);
}
