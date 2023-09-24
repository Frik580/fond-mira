// "use client";

import "./MainLogo.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "../../shared/hooks/redux";
import { setLinkHome } from "../../store/reducers/linkSlice";
import Link from "next/link";

export const MainLogo = () => {
    const pathname = usePathname();
    const dispatch = useAppDispatch();

    return (
        <Link
            onClick={() => dispatch(setLinkHome())}
            href={pathname === "/" ? "#" : "/"}
            className="main-logo__conteiner"
        >
            <Image
                src={require("@/shared/image/logo.png")}
                width={200}
                height={200}
                className="main-logo__image"
                alt="голубь мира"
            />
        </Link>
    );
};
