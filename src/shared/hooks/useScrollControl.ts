import { useEffect } from "react";

export default function useScrollControl() {

    useEffect(() => {
        const callback = () => {
            document.documentElement.style.setProperty(
                "--scroll-y",
                `${window.scrollY}px`,
            );
        }

        window.addEventListener("scroll", callback);

        return () => {
            window.removeEventListener("scroll", callback);
        };
    }, [])
}