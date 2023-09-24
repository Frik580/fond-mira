import { useEffect } from "react";
import { useAppDispatch } from "./redux";
import { setValueHeader } from "@/store/reducers/headerSlice";

export default function useHeaderActive(ref: any) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const currentRef = ref.current;

        if (currentRef) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    dispatch(setValueHeader(entry.isIntersecting));
                });
            });

            observer.observe(currentRef);

            return () => {
                observer.unobserve(currentRef);
            };
        }
    }, []);

}