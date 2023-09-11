import { useEffect } from "react";
import { useAppDispatch } from "./redux";

export default function useLinkDeactive(ref: any, falsevalue: any) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const currentRef = ref.current;
        if (currentRef) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    !entry.isIntersecting && dispatch(falsevalue);
                });
            }, { threshold: 0.2 });

            observer.observe(currentRef);

            return () => {
                observer.unobserve(currentRef);
            };
        }
    }, []);

}