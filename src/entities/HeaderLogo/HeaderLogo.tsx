// "use client";

import "./HeaderLogo.css";
import Image from "next/image";
import { useAppDispatch } from "../../shared/hooks/redux";
import { setLinkHome } from "../../store/reducers/linkSlice";
import { FC} from "react";
import { usePathname, useRouter } from "next/navigation";
import logo from "./logo.png";

type HeaderLogoProps = {
    headerValue: boolean;
};

export const HeaderLogo: FC<HeaderLogoProps> = ({ headerValue }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const pathname = usePathname();

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
                className={headerValue && pathname === "/" ? "logo__image_large" : "logo__image"}
                alt="голубь мира"
            />
            {headerValue && pathname === "/" && (
                <p className="logo__text">
                    ПРО МОФ &#171;Российский фонд мира&#187;
                </p>
            )}
        </button>
    );
};
