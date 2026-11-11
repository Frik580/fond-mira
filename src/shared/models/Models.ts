import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import { Key } from 'react';

export type IconNameType = 'arrow-left' | 'arrow-right';
export type ComponentProps = { children?: React.ReactNode; className?: string };
export type DocumentsType = { id: number; title: string; href: string };
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
export type ContentBlock =
    | { type: 'paragraph'; boldText?: string; text?: string }
    | { type: 'goal'; title: string; text: string }
    | { type: 'list'; listType?: 'ul' | 'ol'; items: (string | string[])[]; className?: string }
    | { type: 'article'; title?: string; text?: string; paragraphs?: string[]; items?: (string | string[])[]; listType?: 'ul' | 'ol'; className?: string }
    | { type: 'document'; title: string; href: string }
    | { type: 'image-link'; href: string; src: string | StaticImageData; width?: number; height?: number; title?: string };
export type ProjectType = {
    id: Key | null | undefined;
    year: number;
    title: string;
    preview: string;
    src: string;
    partner: string;
    href: string;
    photo: number;
    details: ContentBlock[];
};
export type GalleryType = { photo: number; server: string; extension: string; height: number; width?: number };

export type SanityBlock = {
    _type: string;
    _key?: string;
    style?: string;
    listItem?: 'bullet' | 'number';
    children?: { _key?: string; text?: string; marks?: string[] }[];
    markDefs?: { _key: string; _type: string; href?: string }[];
};

export type NewsType = {
    _id: string;
    createdAt: string;
    title: string;
    slug: string;
    tags: string[];
    preview: string;
    article: string[];
    photo: number;
    video: string[];
    images?: { url: string; alt?: string }[];
    body?: SanityBlock[];
};
