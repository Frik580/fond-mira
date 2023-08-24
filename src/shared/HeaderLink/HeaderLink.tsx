import Link from "next/link";
import "./HeaderLink.css";

type Props = {
    title: string;
    path: string;
};

export const HeaderLink = ({ title, path }: Props) => {
    return (
        <div className="header-link__conteiner">
            <Link href={path} className="header-link">
                {title}
            </Link>
        </div>
    );
};
