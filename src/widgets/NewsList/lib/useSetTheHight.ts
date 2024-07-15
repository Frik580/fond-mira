// "use client";

import { useAppDispatch } from "@/shared/hooks/redux";
import { setNews } from "@/store/reducers/newsHightSlice";
import { MutableRefObject, useEffect, useState } from "react";

export default function useSetTheHight(
    ref: MutableRefObject<HTMLDivElement | null>,
    index: number,
    loaded: boolean,
    hightValue?: number,
) {
    const dispatch = useAppDispatch();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResizeWindow = () => {
            if (window.innerWidth > width) {
                dispatch(setNews(0));
            }
            setTimeout(() => {
                setWidth(window.innerWidth);
            }, 1000);
        };

        window.addEventListener("resize", handleResizeWindow);

        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, [width]);

    useEffect(() => {
        const dataConteiner = ref.current?.clientHeight;
        if (index === 0 && dataConteiner) {
            dispatch(setNews(dataConteiner));
        }
    }, [loaded, width]);
}
