// "use client";

import "./MainLogo.css";
import Image from "next/image";
import logo from "./logo.png";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "../../shared/hooks/redux";
import { setLinkHome } from "../../store/reducers/linkSlice";
import Link from "next/link";

export const MainLogo = () => {
    const pathname = usePathname();
    const dispatch = useAppDispatch();

    return (
        <>
            {pathname === "/" ? (
                <Link
                    onClick={() => dispatch(setLinkHome())}
                    href="#"
                    className="main-logo__conteiner"
                >
                    <Image
                        src={logo}
                        className="main-logo__image"
                        alt="голубь мира"
                    />
                </Link>
            ) : (
                <Link href="/" className="main-logo__conteiner">
                    <Image
                        src={logo}
                        className="main-logo__image"
                        alt="голубь мира"
                    />
                </Link>
            )}
        </>
    );
};
