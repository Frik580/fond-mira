"use client";

import "./ProjectProDobro.css";
import Image from "next/image";
import { HeaderTitle } from "@/entities/HeaderTitle/HeaderTitle";
import { PROJECTS, ProjectType } from "../../shared/Constants";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/shared/hooks/redux";
import { setValueHeader } from "@/store/reducers/headerSlice";
import { Support } from "@/entities/Support/Support";

export const ProjectProDobro = () => {
    const [project, setProject] = useState<ProjectType | null>(null);
    const ref = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setProject(PROJECTS[0]);
        const currentRef = ref.current;

        if (currentRef) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    dispatch(setValueHeader(entry.isIntersecting));
                });
            });

            observer.observe(currentRef);

            return () => {
                observer.unobserve(currentRef);
            };
        }
    }, [project]);

    return (
        <>
            {project && (
                <section className="project-pd">
                    <div
                        className="project-pd__image"
                        style={{
                            backgroundImage: `url("./image/projects/${project.src}.png")`,
                        }}
                    />
                    <div ref={ref} className="project-pd__title">
                        <HeaderTitle title={project.title} />
                    </div>
                    <div className="project-pd__conteiner">
                        <div className="project-pd__partner">
                            <Support partner={project.partner} />
                        </div>
                        <p>ProjectProDobro</p>
                    </div>
                </section>
            )}
        </>
    );
};
