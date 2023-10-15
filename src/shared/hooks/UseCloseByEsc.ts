import { useEffect } from "react";
import { useAppDispatch } from "./redux";
import { setValueNavPopup, setValueNewsPopup } from "@/store/reducers/popupSlice";
import unfixedBody from "../lib/UnfixedBody";

export default function useCloseByEsc() {
    const dispatch = useAppDispatch();
    const disp = () => {
        unfixedBody();
        dispatch(setValueNewsPopup(false));
        dispatch(setValueNavPopup(false));
    }

    useEffect(() => {
        const handleEscClose = (e: { key: string; }) => {
            e.key === "Escape" && disp();
        };
        window.addEventListener("scroll", () => {
            document.documentElement.style.setProperty(
                "--scroll-y",
                `${window.scrollY}px`,
            );
        });
        document.addEventListener("keyup", handleEscClose);
        
        return () => {
            window.removeEventListener("scroll", () => {
                document.documentElement.style.setProperty(
                    "--scroll-y",
                    `${window.scrollY}px`,
                );
            });
            document.removeEventListener("keyup", handleEscClose);
        };
    }, [])
}