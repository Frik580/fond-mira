import { useEffect } from "react";

export default function useCloseByEsc(func: any) {
    useEffect(() => {
        const handleEscClose = (e: any) => {
            e.key === "Escape" && func();
        };
        document.addEventListener("keyup", handleEscClose);
        return () => {
            document.removeEventListener("keyup", handleEscClose);
        };
    }, [])
}


// React.KeyboardEvent<HTMLInputElement>