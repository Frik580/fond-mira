// "use client";

import "./Projects.css";
import Image from "next/image";
import imageNews from "./5_4T5J0z5xA.png";
import { MainTitle } from "../MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";

export const Projects = () => {
    return (
        <section className="projects">
            <MainTitle id="projects" text={TITLES.OUR_PROJECTS} />
            <div className="projects__conteiner">
               <p>PROJECTS</p>
            </div>
        </section>
    );
};
