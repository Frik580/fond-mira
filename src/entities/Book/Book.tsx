// "use client";

import "./Book.css";
import Link from "next/link";
import Image from "next/image";
import orden from "./images/orden.png";
import ordenLite from "./images/orden-lite.png";
import { FC } from "react";

type BookProps = {
    header: boolean;
};

export const Book: FC<BookProps> = ({ header }) => {
    return (
        <Link
            className="book"
            href={"https://bank.permgaspi.ru/base.php?i=29"}
            target="_blank"
            rel="noreferrer"
        >
            <Image
                src={orden}
                width={80}
                height={80}
                className="book__image"
                alt="орден ВОВ"
                blurDataURL={ordenLite.src}
                placeholder="blur"
            />
            <p className={header ? `book__title` : `book__title_hover`}>
                Книга Памяти
            </p>
            <p className="book__text">1941 - 1945</p>
            <p className="book__text">
                База данных погибших военнослужащих Пермского Края
            </p>
        </Link>
    );
};
