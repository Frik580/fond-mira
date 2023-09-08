"use client";

import "./MainLogo.css";
import Image from "next/image";
import logo from "./logo.png";
import { usePathname } from "next/navigation";

export const MainLogo = () => {
    const pathname = usePathname();

    return (
        <>
            {pathname === "/" ? (
                <a href="#" className="main-logo__conteiner">
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
