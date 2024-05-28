import { FC } from "react";
import "./BurgerButton.css";

type BurgerButtonProps = {
    click: any;
    headerValue: boolean;
};

export const BurgerButton: FC<BurgerButtonProps> = ({ click, headerValue }) => {
    return (
        <div className="burger-button__conteiner">
            <button
                onClick={click}
                className={
                    headerValue ? "burger-button" : "burger-button_black"
                }
                type="button"
            />
        </div>
    );
};
