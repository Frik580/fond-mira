import "./MainLogo.css";
import Image from 'next/image'
import img from "./logo.png";

export const MainLogo = () => {
    return (
        <div className="main-logo__conteiner">
            <Image src={img} className="main-logo__image" alt='голубь мира' />
        </div>
    );
};
