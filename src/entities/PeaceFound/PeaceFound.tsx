import Link from "next/link";
import "./PeaceFound.css";
import Image from "next/image";
import { memo } from "react";
import logo from "./fond.png";

const PeaceFound = memo(function PeaceFound() {
    return (
        <Link
            href="https://peacefound.ru"
            className="found__ikon"
            target="_blank"
            rel="noreferrer"
        >
            <Image
                src={logo}
                width={200}
                height={200}
                className="found__image"
                alt="логотип фонда мира"
            />
        </Link>
    );
});

export default PeaceFound;
