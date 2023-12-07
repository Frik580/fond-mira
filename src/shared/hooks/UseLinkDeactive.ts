import { MutableRefObject, useEffect } from "react";
import { useAppDispatch } from "./redux";

export default function useLinkDeactive(ref: MutableRefObject<HTMLDivElement | null>, falsevalue: { payload: boolean; type: "link/setLinkProjectslist" | "link/setLinkAboutus" | "link/setLinkContacts" | "link/setLinkNewslist" | "link/setLinkPartners"; }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const currentRef = ref.current;
        if (currentRef) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    !entry.isIntersecting && dispatch(falsevalue);
                });
            }
                , { threshold: 0.2 }
            );

            observer.observe(currentRef);

            return () => {
                observer.unobserve(currentRef);
            };
        }
    }, []);

}