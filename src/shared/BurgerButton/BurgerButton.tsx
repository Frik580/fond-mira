import "./BurgerButton.css";

export const BurgerButton = ({click}: any) => {
    return (
        <div className="burger-button__conteiner">
            <button
                onClick={click}
                className="burger-button"
                type="button"
            />
        </div>
    );
};
