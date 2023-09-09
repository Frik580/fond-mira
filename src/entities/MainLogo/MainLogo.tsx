// "use client";

import "./MainLogo.css";
import Image from "next/image";
import logo from "./logo.png";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "../../shared/hooks/redux";
import { setLinkHome } from "../../store/reducers/linkSlice";

export const MainLogo = () => {
    const pathname = usePathname();
    const dispatch = useAppDispatch();

    return (
        <>
            {pathname === "/" ? (
                <a
                    onClick={() => dispatch(setLinkHome())}
                    href="#"
                    className="main-logo__conteiner"
                >
                    <Image
                        src={logo}
                        className="main-logo__image"
                        alt="голубь мира"
                    />
                </a>
            ) : (
                <a href="/" className="main-logo__conteiner">
                    <Image
                        src={logo}
                        className="main-logo__image"
                        alt="голубь мира"
                    />
                </a>
            )}
        </>
    );
};
