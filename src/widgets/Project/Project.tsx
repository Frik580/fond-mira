// "use client";

import "./Project.css";
import {
    backgroundImageWithoutPhoto,
    backgroundImageWithPhoto,
    IMAGE_PERMISSION,
    PARTNERS_PERMISSION,
    SERVER_URL,
    SERVER_URL_PARTNERS,
    SERVER_URL_PROJECTS_COVER,
    SERVER_URL_PROJECTS_COVER_LITE,
} from "@/shared/Constants";
import { FC } from "react";
import { Support } from "@/entities/Support/Support";
import { TopImage } from "@/entities/TopImage/TopImage";
import { ProjectType } from "@/shared/models/Models";
import { NewCarousel } from "../NewCarousel/NewCarousel";

type ProjectProps = {
    children: React.ReactNode;
    project: ProjectType;
};

export const Project: FC<ProjectProps> = ({ children, project }) => {
    const server = `${SERVER_URL}${project.href}/`;

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
            <div className="project__conteiner">
                <div
                    className="project__partner"
                    style={{
                        backgroundImage: `url(${SERVER_URL_PARTNERS}${project.partner}.${PARTNERS_PERMISSION})`,
                    }}
                />
                <h1 className="title">{project.title}</h1>
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
