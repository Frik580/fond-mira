"use client";

import "./HeaderLogo.css";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/redux";
import { setLinkHome } from "../../../store/reducers/linkSlice";
import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../../../public/images/lg.png";
import { popupValue } from "@/store/reducers/popupSlice";

type HeaderLogoProps = {
    headerValue: boolean;
};

export const HeaderLogo: FC<HeaderLogoProps> = ({ headerValue }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const pathname = usePathname();
    const popup = useAppSelector(popupValue);

    const routing = () => {
        dispatch(setLinkHome());
        router.push("/");
    };

    return (
        <button onClick={routing} className="logo__conteiner">
            <Image
                src={logo}
                width={200}
                height={200}
                className={
                    headerValue && pathname === "/" && !popup.valuePhoto
                        ? "logo__image_large"
                        : "logo__image"
                }
                alt="голубь мира"
            />
            {headerValue && pathname === "/" && !popup.valuePhoto && (
                <div className="box">
                    <p className="logo__text logo__text_first_line">
                        {/* ПРО МОФ &#171;Российский фонд мира&#187; */}
                        Фонд Мира
                    </p>
                    <p className="logo__text logo__text_second_line">
                        {/* ПРО МОФ &#171;Российский фонд мира&#187; */}
                        Пермского Края
                    </p>
                </div>
            )}
        </button>
    );
};
