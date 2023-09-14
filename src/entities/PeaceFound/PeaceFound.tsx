import "./PeaceFound.css";
import Image from "next/image";

export const PeaceFound = () => {
    return (
        <a
            href="https://peacefound.ru"
            className="found__ikon"
            target="_blank"
            rel="noreferrer"
        >
            <Image
                src='/image/fond.png'
                width={200}
                height={200}
                className="found__image"
                alt="логотип фонда мира"
            />
        </a>
    );
};
