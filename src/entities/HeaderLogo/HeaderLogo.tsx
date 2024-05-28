// "use client";

import "./HeaderLogo.css";
import Image from "next/image";
import { useAppDispatch } from "../../shared/hooks/redux";
import { setLinkHome } from "../../store/reducers/linkSlice";
import { FC} from "react";
import { useRouter } from "next/navigation";
import logo from "./logo.png";

type HeaderLogoProps = {
    headerValue: boolean;
};

export const HeaderLogo: FC<HeaderLogoProps> = ({ headerValue }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

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
                className={headerValue ? "logo__image" : "logo__image_visibility"}
                alt="голубь мира"
            />
            {headerValue && (
                <p className="logo__text">
                    ПРО МОФ &#171;Российский фонд мира&#187;
                </p>
            )}
        </button>
    );
};
