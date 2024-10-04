// "use client";

import { NavPopup } from "../NavPopup/NavPopup";
import { PhotoPopup } from "@/entities/PhotoPopup/PhotoPopup";
// import { useAppSelector } from "@/shared/hooks/redux";
// import { popupValue } from "@/store/reducers/popupSlice";

export const Popups = () => {
    // const openpopup = useAppSelector(popupValue);

    return (
        <>
            <NavPopup />
            <PhotoPopup />
        </>
        // <>
        //     {openpopup.valueNav && <NavPopup />}
        //     {openpopup.valuePhoto && <PhotoPopup />}
        // </>
    );
};
