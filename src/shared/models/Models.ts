import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";

export type IconNameType = "arrow-left" | "arrow-right"

export type ComponentProps = {
    children?: React.ReactNode;
    className?: string;
}

export type DocumentsType = {
    // id: Key | null | undefined;
    id: number;
    title: string;
    href: string;
};

export type CarouselItemType = {
    src: string | StaticImageData;
    srcfullphoto?: string | StaticImageData;
    srclite?: string | undefined;
    height: number;
    width?: number;
    i: number;
    fullphoto?: number;
    cursor?: string;
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
    article: [string];
    photo: number;
    video: [];
};