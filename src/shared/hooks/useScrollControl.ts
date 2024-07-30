import { useEffect, useState } from "react";
import { useAppSelector } from "./redux";
import { headerState } from "@/store/reducers/headerSlice";

export default function useScrollControl() {
    const headerVisibilety = useAppSelector(headerState);
    const [header, setHeader] = useState(true)

    useEffect(() => {
        if (headerVisibilety === null) {
            const callback = () => {
                document.documentElement.style.setProperty(
                    "--scroll-y",
                    `${window.scrollY}px`,
                );

                const scrollTop = document.documentElement.scrollTop;
                scrollTop > 50 ? setHeader(false) : setHeader(true)
            }

            window.addEventListener("scroll", callback);

            return () => {
                window.removeEventListener("scroll", callback);
            };
        } else {
            setHeader(headerVisibilety)
        }

    }, [headerVisibilety])

    return header;
}