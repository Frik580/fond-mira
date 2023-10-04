"use client";

import "./Project.css";
import { HeaderTitle } from "@/entities/HeaderTitle/HeaderTitle";
import { ProjectType } from "@/shared/Constants";
import { FC, useEffect, useRef, useState } from "react";
import { Support } from "@/entities/Support/Support";
import { Gallery } from "../Gallery/Gallery";
import useHeaderActive from "@/shared/hooks/UseHeaderActive";
import { useAppDispatch } from "@/shared/hooks/redux";
import { setLinkHome } from "@/store/reducers/linkSlice";
import { TopImage } from "@/entities/TopImage/TopImage";

type ProjectProps = {
    children: React.ReactNode;
    project: ProjectType;
};

export const Project: FC<ProjectProps> = ({ children, project }) => {
    const dispatch = useAppDispatch();
    const [image, setImage] = useState("");
    const ref = useRef<HTMLDivElement | null>(null);
    useHeaderActive(ref);

    useEffect(() => {
        dispatch(setLinkHome());
        const image = require(`@/shared/image/projects/${project.src}.webp`);
        setImage(image.default.src);
    }, [project]);

    return (
        <section
            className="project"
            style={
                Boolean(project.photo)
                    ? {
                          backgroundImage:
                              "linear-gradient(rgba(255,255,255, 0) 20%, var(--color-dust-white) 70%)",
                      }
                    : {
                          backgroundImage:
                              "linear-gradient(rgba(255,255,255, 0) 20%, var(--color-dust-white) 90%)",
                      }
            }
        >
            {Boolean(image) && <TopImage src={image} />}
            <div ref={ref} className="project__title">
                <HeaderTitle title={project.title} />
            </div>
            <div className="project__conteiner">
                <div className="project__partner">
                    <Support partner={project.partner} />
                </div>
                {children}
            </div>
            {Boolean(project.photo) && (
                <Gallery href={project.href} photo={project.photo} />
            )}
        </section>
    );
};
