import { useEffect } from "react";

export default function useScrollControl() {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            document.documentElement.style.setProperty(
                "--scroll-y",
                `${window.scrollY}px`,
            );
        }
        );

        return () => {
            window.removeEventListener("scroll", () => {
                document.documentElement.style.setProperty(
                    "--scroll-y",
                    `${window.scrollY}px`,
                );
            });
        };
    }, [])
}