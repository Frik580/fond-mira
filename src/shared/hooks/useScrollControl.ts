import { useEffect, useState } from "react";

export default function useScrollControl() {
    const [header, setHeader] = useState(true)

    useEffect(() => {
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
    }, [])

    return header;
}