// "use client";

import "./MainLogo.css";
import Image from "next/image";
import { useAppDispatch } from "../../shared/hooks/redux";
import { setLinkHome } from "../../store/reducers/linkSlice";
import { memo } from "react";
import { useRouter, usePathname } from "next/navigation";
import logo from "./logo.png"

const MainLogo = memo(function MainLogo() {
    const pathname = usePathname();
    const dispatch = useAppDispatch();
    const router = useRouter();

    const routing = () => {
        dispatch(setLinkHome());
        pathname === "/" ? router.push("/") : router.back();
    };

    return (
        <button onClick={routing} className="main-logo__conteiner">
            <Image
                src={logo}
                width={200}
                height={200}
                className="main-logo__image"
                alt="голубь мира"
            />
        </button>
    );
});

export default MainLogo;
