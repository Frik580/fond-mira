import { Key } from "react";

export type DocumentsType = {
    id: Key | null | undefined;
    title: string;
    href: string;
};

export type ProjectType = {
    id: Key | null | undefined;
    year: number;
    title: string;
    preview: string;
    src: string;
    partner: string;
    href: string;
    photo: number;
};

export type GalleryType = {
    photo: number;
    server: string;
    extension: string;
    height: number;
    width?: number;
};

export type NewsType = {
    _id: string;
    createdAt: string;
    title: string;
    slug: string;
    tags: [];
    preview: string;
    article: [];
    photo: number;
    video: [];
};