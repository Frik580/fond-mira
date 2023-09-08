import "./HeaderTitle.css";

type Props = {
    title: string;
};

export const HeaderTitle = ({ title }: Props) => {
    return <h1 className="header-title">{title}</h1>;
};
