import "./PeaceFound.css";
import Image from "next/image";
import imageFound from "./fond.png";

export const PeaceFound = () => {
    return (
        <a
            href="https://peacefound.ru"
            className="found__ikon"
            target="_blank"
            rel="noreferrer"
        >
            <Image
                src={imageFound}
                className="found__image"
                alt="логотип фонда мира"
            />
        </a>
    );
};
