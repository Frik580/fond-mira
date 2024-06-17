import { MutableRefObject, useEffect } from "react";

export default function useLink(ref: MutableRefObject<HTMLDivElement | null>, value: boolean) {

    const scrollToSection = (elementRef: any) => {
        // if (elementRef !== null) {
            window.scrollTo({
                top: elementRef.current.offsetTop,
              //   behavior: "smooth",
               });
              };
        // }


    useEffect(() => {
        if (value) {
            scrollToSection(ref)
        }
    }, [value]);

}