"use client";

import "./ProjectProDobro.css";
import Image from "next/image";
import { HeaderTitle } from "@/entities/HeaderTitle/HeaderTitle";
import { PROJECTS } from "../../shared/Constants";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/shared/hooks/redux";
import { setValueHeader } from "@/store/reducers/headerSlice";

export const ProjectProDobro = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
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
    }, []);

    return (
        <section className="project">
            <div
                className="project__image"
                style={{
                    backgroundImage: `url(${"./image/projects/dobro.png"})`,
                }}
            />
            <div ref={ref} className="project__title">
                <HeaderTitle title={PROJECTS[0].title} />
            </div>
            <div className="project__conteiner">
                <p>ProjectProDobro</p>
            </div>
        </section>
    );
};
