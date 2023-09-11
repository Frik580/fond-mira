"use client";

import "./ProjectLink.css";
import Image from "next/image";
import Link from "next/link";
import imageProject from "./project.png";

type Props = {
    title: string;
    src: any;
};

export const ProjectLink = ({ title, src }: Props) => {
    return (
        <Link href={`project`}>
            <li
                onMouseEnter={() => console.log("Навел")}
                className="projectlink"
            >
                <Image
                    src={src}
                    className="projectlink__image"
                    alt="image"
                />
                <div className="projectlink__conteiner">
                    <p className="projectlink__title">{title}</p>
                    <p className="projectlink__text">больше информации</p>
                </div>
            </li>
        </Link>
    );
};
