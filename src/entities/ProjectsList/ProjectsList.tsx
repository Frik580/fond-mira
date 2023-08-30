"use client";

import "./ProjectsList.css";
import Image from "next/image";
import imageNews from "./5_4T5J0z5xA.png";
import { MainTitle } from "../MainTitle/MainTitle";
import { Project } from "../Project/Project";
import { TITLES } from "../../shared/Constants";

export const ProjectsList = () => {
    return (
        <section className="projects-list">
            <MainTitle id="projects-list" text={TITLES.OUR_PROJECTS} />
            <ul className="projects-list__conteiner">
               <Project />
               <Project />
               <Project />
               <Project />
               <Project />
               <Project />
               <Project />
               <Project />
               <Project />
            </ul>
        </section>
    );
};
