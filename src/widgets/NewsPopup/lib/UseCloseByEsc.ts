import { useEffect } from "react";
import { setValueNewsPopup } from "@/store/reducers/popupSlice";
import { useAppDispatch } from "@/shared/hooks/redux";

export default function useCloseByEsc(value: boolean) {
    const dispatch = useAppDispatch();


    useEffect(() => {
        const handleEscClose = (e: { key: string; }) => {
            e.key === "Escape" && dispatch(setValueNewsPopup(value));
        };
        document.addEventListener("keyup", handleEscClose);
        return () => {
            document.removeEventListener("keyup", handleEscClose);
        };
    }, []);
}
