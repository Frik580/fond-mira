import { MutableRefObject, RefObject, useEffect } from "react";

export default function useLink(
    ref: MutableRefObject<HTMLDivElement | null>,
    value: boolean
) {

    const scrollToSection = (elementRef: MutableRefObject<HTMLDivElement | null> | null) => {
        if (elementRef !== null) {
            window.scrollTo({
                top: elementRef.current?.offsetTop,
                // behavior: "smooth",
            });
        };
    }

    useEffect(() => {
        if (value) {
            scrollToSection(ref)
        }
    }, [value]);

}