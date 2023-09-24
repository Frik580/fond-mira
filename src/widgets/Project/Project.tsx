"use client";

import "./Project.css";
import { HeaderTitle } from "@/entities/HeaderTitle/HeaderTitle";
import { ProjectType } from "../../shared/Constants";
import { FC, useEffect, useRef, useState } from "react";
import { Support } from "@/entities/Support/Support";
import { Gallery } from "../Gallery/Gallery";
import useHeaderActive from "@/shared/hooks/UseHeaderActive";
import { useAppDispatch } from "@/shared/hooks/redux";
import { setLinkHome } from "@/store/reducers/linkSlice";

type ProjectProps = {
    child: React.ReactNode;
    project: ProjectType;
};

export const Project: FC<ProjectProps> = ({ child, project }) => {
    const dispatch = useAppDispatch();
    const [image, setImage] = useState("");
    const ref = useRef<HTMLDivElement | null>(null);
    useHeaderActive(ref);

    useEffect(() => {
        dispatch(setLinkHome());
        const image = require(`@/shared/image/projects/${project.src}.webp`);
        setImage(image.default.src);
    }, []);

    return (
        <section className="project">
            <div
                className="project__image"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            />
            <div ref={ref} className="project__title">
                <HeaderTitle title={project.title} />
            </div>
            <div className="project__conteiner">
                <div className="project__partner">
                    <Support partner={project.partner} />
                </div>
                <>{child}</>
            </div>
            {Boolean(project.photo) && (
                <Gallery href={project.href} photo={project.photo} />
            )}
        </section>
    );
};
