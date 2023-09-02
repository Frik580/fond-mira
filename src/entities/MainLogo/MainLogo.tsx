import "./MainLogo.css";
import Image from 'next/image'
import logo from './logo.png'

export const MainLogo = () => {
    return (
        <div className="main-logo__conteiner">
            <Image src={logo} className="main-logo__image" alt='голубь мира' />
        </div>
    );
};
