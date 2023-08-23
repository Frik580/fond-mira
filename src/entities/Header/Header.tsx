'use client'

import { BurgerButton } from "@/shared/BurgerButton/BurgerButton";
import "./Header.css";
import { MainLogo } from "@/shared/MainLogo/MainLogo";

export const Header = () => {
    return (
        <header className="header">
            <BurgerButton click={()=> {}} />
            <MainLogo />
            <p>Header</p>
        </header>
    );
};
