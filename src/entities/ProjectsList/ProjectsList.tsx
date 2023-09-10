"use client";

import "./ProjectsList.css";
import { MainTitle } from "../MainTitle/MainTitle";
import { Project } from "../Project/Project";
import { TITLES } from "../../shared/Constants";
import { useRef } from "react";
import useLinkDeactive from "@/shared/hooks/UseLinkDeactive";
import { setLinkProjectslist } from "@/store/reducers/linkSlice";

export const ProjectsList = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(ref, setLinkProjectslist(false));

    return (
        <section ref={ref} className="projects-list">
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
