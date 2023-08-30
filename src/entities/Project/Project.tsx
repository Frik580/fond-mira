"use client";

import "./Project.css";
import Image from "next/image";
import imageProject from "./project.png";

export const Project = () => {
    return (
        <li onMouseEnter={() => console.log("Навел")} className="project">
            <Image src={imageProject} className="project__image" alt="image" />
        </li>
    );
};
