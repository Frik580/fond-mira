// "use client";

import "./Project.css";
import {
    IMAGE_EXTENSION,
    SERVER_URL,
    SERVER_URL_PROJECTS_COVER,
    SERVER_URL_PROJECTS_COVER_LITE,
} from "@/shared/Constants";
import { FC, useEffect, useRef, useState } from "react";
import { Support } from "@/entities/Support/Support";
import useHeaderActive from "@/shared/hooks/UseHeaderActive";
import { useAppDispatch } from "@/shared/hooks/redux";
import { setLinkHome } from "@/store/reducers/linkSlice";
import { TopImage } from "@/entities/TopImage/TopImage";
import { ProjectType } from "@/shared/models/Models";
import { NewCarousel } from "../NewCarousel/NewCarousel";

type ProjectProps = {
    children: React.ReactNode;
    project: ProjectType;
};

export const Project: FC<ProjectProps> = ({ children, project }) => {
    const [server, setServer] = useState("");
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement | null>(null);
    useHeaderActive(ref);

    const backgroundImageWithPhoto =
        "linear-gradient(rgba(255,255,255, 0) 20%, var(--color-dust-white) 70%)";
    const backgroundImageWithoutPhoto =
        "linear-gradient(rgba(255,255,255, 0) 20%, var(--color-dust-white) 90%)";

    useEffect(() => {
        dispatch(setLinkHome());
        setServer(`${SERVER_URL}${project.href}/`);
    }, [project]);

    return (
        <section
            className="project"
            style={
                Boolean(project.photo)
                    ? {
                          backgroundImage: `${backgroundImageWithPhoto}`,
                      }
                    : {
                          backgroundImage: `${backgroundImageWithoutPhoto}`,
                      }
            }
        >
            <TopImage
                src={`${SERVER_URL_PROJECTS_COVER}${project.src}.${IMAGE_EXTENSION}`}
                srclite={`${SERVER_URL_PROJECTS_COVER_LITE}${project.src}.${IMAGE_EXTENSION}`}
            />
            <div ref={ref} style={{ height: "20px" }} />
            <div className="project__conteiner">
                <div className="project__partner">
                    <Support partner={project.partner} />
                </div>
                <h1 className="project__title">{project.title}</h1>
                {children}
            </div>
            {Boolean(project.photo) && (
                <div className="project__gallery">
                    <NewCarousel
                        photo={project.photo}
                        server={server}
                        extension={IMAGE_EXTENSION}
                        height={400}
                    />
                </div>
            )}
        </section>
    );
};
