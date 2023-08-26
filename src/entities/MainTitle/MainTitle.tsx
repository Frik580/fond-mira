import "./MainTitle.css";

type Props = {
    id: string;
    text: string;
};

export const MainTitle = ({ id, text }: Props) => {
    return (
        <h2 id={id} className="main-title">
            {text}
        </h2>
    );
};
