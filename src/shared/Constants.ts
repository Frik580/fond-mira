import { Key } from "react";

export const WINDOW_SIZE = {
    HIGH: 1000,
    MIDDLE: 600,
};

export const PHOTO_AMT = {
    HIGH: 3,
    MIDDLE: 2,
    SMALL: 1,
};

export const TITLES = {
    ABOUT_US: "Кто мы",
    NEWS: "Новости",
    OUR_PROJECTS: "Наши проекты",
    PARTNERS: "Партнёры",
    DOCUMENTS: "Документы",
    CONTACTS: "Контакты",
};

export const PATH = {
    ABOUT_US: "/#about-us",
    NEWS: "/#news-list",
    OUR_PROJECTS: "/#projects-list",
    PARTNERS: "/#partners",
    DOCUMENTS: "/documents",
    CONTACTS: "/#contacts",
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

export const PROJECTS = [
    {
        id: 1,
        year: 2018,
        title: "Солнечный круг",
        preview: "edededed",
        src: 'sol',
        partner: 'pg',
        href: "/solnechnyy-krug",
        photo: 4,
    },

    {
        id: 2,
        year: 2018,
        title: "Фестиваль семейного досуга и творчества «Мы – ветви. ПЕРМЬ»",
        preview: "edededed",
        src: 'vet',
        partner: 'gorod',
        href: "/vetvi",
        photo: 0,
    },
    {
        id: 3,
        year: 2019,
        title: "МЫ и МИР",
        preview: "edededed",
        src: 'my',
        partner: 'guber',
        href: "/my-i-mir",
        photo: 11,
    },
    {
        id: 4,
        year: 2019,
        title: "Реконструкция Победы. Живая Память",
        preview: "edededed",
        src: 'pobeda',
        partner: 'pg',
        href: "/zhivaya-pamyat",
        photo: 13,
    },
    {
        id: 5,
        year: 2020,
        title: "Майский вальс. Виват, Победа!",
        preview: "edededed",
        src: 'vals',
        partner: 'gorod',
        href: "/mayskiy-vals",
        photo: 0,
    },
    {
        id: 6,
        year: 2021,
        title: "Кто, если не ТЫ",
        preview: "edededed",
        src: 'kto',
        partner: 'guber',
        href: "/kto-yesli-ne-ty",
        photo: 5,
    },
    {
        id: 7,
        year: 2022,
        title: "Рябиновая аллея Героев",
        preview: "edededed",
        src: 'alleya',
        partner: 'pg',
        href: "/ryabinovaya-alleya",
        photo: 26,
    },
    {
        id: 8,
        year: 2022,
        title: "Пермь великая – ПАРМА многоликая",
        preview: "edededed",
        src: 'perm_velikaya',
        partner: 'pfki',
        href: "/perm-velikaya",
        photo: 5,
    },
    {
        id: 9,
        year: 2023,
        title: "Кто, если не ТЫ! PRO-ДОБРО",
        preview: "edededed",
        src: 'dobro',
        partner: 'guber',
        href: "/pro-dobro",
        photo: 0,
    },
];
