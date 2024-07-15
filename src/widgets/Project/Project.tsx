// "use client";

import "./Project.css";
import {
    IMAGE_PERMISSION,
    SERVER_URL,
    SERVER_URL_PROJECTS_COVER,
    SERVER_URL_PROJECTS_COVER_LITE,
} from "@/shared/Constants";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { Support } from "@/entities/Support/Support";
import { useAppDispatch } from "@/shared/hooks/redux";
import { setLinkHome } from "@/store/reducers/linkSlice";
import { TopImage } from "@/entities/TopImage/TopImage";
import { ProjectType } from "@/shared/models/Models";
import { NewCarousel } from "../NewCarousel/NewCarousel";
import useElementVisible from "@/shared/hooks/useElementVisible";
import { setValueHeader } from "@/store/reducers/headerSlice";

type ProjectProps = {
    children: React.ReactNode;
    project: ProjectType;
};

export const Project: FC<ProjectProps> = ({ children, project }) => {
    const [server, setServer] = useState("");
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement | null>(null);

    const visibilityRef = useCallback(
        (value: boolean) => {
            dispatch(setValueHeader(value));
        },
        [dispatch],
    );

    useElementVisible(ref, visibilityRef);

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
                !!project.photo
                    ? {
                          backgroundImage: `${backgroundImageWithPhoto}`,
                      }
                    : {
                          backgroundImage: `${backgroundImageWithoutPhoto}`,
                      }
            }
        >
            <TopImage
                src={`${SERVER_URL_PROJECTS_COVER}${project.src}.${IMAGE_PERMISSION}`}
                srclite={`${SERVER_URL_PROJECTS_COVER_LITE}${project.src}.${IMAGE_PERMISSION}`}
            />
            <div ref={ref} style={{ height: "35px" }} />
            <div className="project__conteiner">
                <div className="project__partner">
                    <Support partner={project.partner} />
                </div>
                <h1 className="project__title">{project.title}</h1>
                {children}
            </div>
            {!!project.photo && (
                <div className="project__gallery">
                    <NewCarousel
                        photo={project.photo}
                        server={server}
                        extension={IMAGE_PERMISSION}
                        height={400}
                    />
                </div>
            )}
        </section>
    );
};
