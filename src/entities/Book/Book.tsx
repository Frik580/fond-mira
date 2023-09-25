// "use client";

import "./Book.css";
import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import orden from "./orden.png";

const Book = memo(function Book() {
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
                alt="логотип фонда мира"
            />
            <p className="book__title">Книга Памяти</p>
            <p className="book__text">1941 - 1945</p>
            <p className="book__text">
                База данных погибших военнослужащих Пермского Края
            </p>
        </Link>
    );
});

export default Book;
