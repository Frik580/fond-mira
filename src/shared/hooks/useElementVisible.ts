import { MutableRefObject, useEffect } from "react";

export default function useElementVisible(ref: MutableRefObject<HTMLDivElement | null>, visibilityRef: { (value: boolean): void; (arg0: boolean): void; }) {

    useEffect(() => {

        const currentRef = ref.current;

        if (currentRef) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    visibilityRef(entry.isIntersecting)
                });
            });

            observer.observe(currentRef);

            return () => {
                observer.unobserve(currentRef);
            };
        }
    }, []);

}