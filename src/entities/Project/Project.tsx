"use client";

import "./Project.css";
import Image from "next/image";
import Link from "next/link";
import imageProject from "./project.png";

export const Project = () => {
    return (
        <Link href={`project`}>
            <li onMouseEnter={() => console.log("Навел")} className="project">
                <Image
                    src={imageProject}
                    className="project__image"
                    alt="image"
                />
                <div className="project__conteiner">
                    <p className="project__title">
                        Пермь великая – ПАРМА многоликая
                    </p>
                    <p className="project__text">больше информации</p>
                </div>
            </li>
        </Link>
    );
};
