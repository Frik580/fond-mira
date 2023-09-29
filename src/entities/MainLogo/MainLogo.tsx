// "use client";

import "./MainLogo.css";
import Image from "next/image";
import { useAppDispatch } from "../../shared/hooks/redux";
import { setLinkHome } from "../../store/reducers/linkSlice";
import { memo } from "react";
import { useRouter } from "next/navigation";
import logo from "./logo.png";

const MainLogo = memo(function MainLogo() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const routing = () => {
        dispatch(setLinkHome());
        router.push("/");
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
