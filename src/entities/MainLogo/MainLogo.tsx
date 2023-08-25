import { StaticImport } from "next/dist/shared/lib/get-img-props";
import "./MainLogo.css";
import Image from 'next/image'

type Props = {
    img: StaticImport,
    alt: string,
}

export const MainLogo = ({img, alt} : Props) => {
    return (
        <div className="main-logo__conteiner">
            <Image src={img} className="main-logo__image" alt={alt} />
        </div>
    );
};
