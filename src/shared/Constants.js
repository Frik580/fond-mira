export const WINDOW_SIZE = {
    HIGH: 1280,
    MIDDLE: 898,
    MIDDLE_2: 562,
};

export const CARDS_QUANTITY = {
    HIGH: 10,
    MIDDLE: 8,
    MIDDLE_2: 9,
    SMALL: 6,
};

export const CARDS_QUANTITY_NEXT = {
    HIGH: 5,
    MIDDLE: 4,
    MIDDLE_2: 3,
};

export const TITLES = {
    ABOUT_US: "Кто мы",
    NEWS: "Новости",
    OUR_PROJECTS: "Наши проекты",
    PARTNERS: "Партнёры",
    DOCUMENTS: "Документы",
    CONTACTS: "Контакты",
};

import imagepfki from "../widgets/PartnersList/images/pfki.png";
import imagepg from "../widgets/PartnersList/images/pg.png";
import imageguber from "../widgets/PartnersList/images/guber.png";
import imagegorod from "../widgets/PartnersList/images/gorod.png";

export const PROJECTS = [
    {
        id: 1,
        year: 2018,
        title: "Солнечный круг",
        preview: "edededed",
        src: 'krug',
        partner: imagepg,
        href: "/solnechnyy-krug",
    },

    {
        id: 2,
        year: 2018,
        title: "Фестиваль семейного досуга и творчества «Мы – ветви. ПЕРМЬ»",
        preview: "edededed",
        src: 'vetvi',
        partner: imagegorod,
        href: "/vetvi",
    },
    {
        id: 3,
        year: 2019,
        title: "МЫ и МИР",
        preview: "edededed",
        src: 'mir',
        partner: imageguber,
        href: "/my-i-mir",
    },
    {
        id: 4,
        year: 2019,
        title: "Реконструкция Победы. Живая Память",
        preview: "edededed",
        src: 'pobeda',
        partner: imagepg,
        href: "/zhivaya-pamyat",
    },
    {
        id: 5,
        year: 2020,
        title: "Майский вальс. Виват, Победа!",
        preview: "edededed",
        src: 'vals',
        partner: imagegorod,
        href: "/mayskiy-vals",
    },
    {
        id: 6,
        year: 2021,
        title: "Кто, если не ТЫ",
        preview: "edededed",
        src: 'kto',
        partner: imageguber,
        href: "/kto-yesli-ne-ty",
    },
    {
        id: 7,
        year: 2022,
        title: "Рябиновая аллея Героев",
        preview: "edededed",
        src: 'alleya',
        partner: imagepg,
        href: "/ryabinovaya-alleya",
    },
    {
        id: 8,
        year: 2022,
        title: "Пермь великая – ПАРМА многоликая",
        preview: "edededed",
        src: 'perm_velikaya',
        partner: imagepfki,
        href: "/perm-velikaya",
    },
    {
        id: 9,
        year: 2023,
        title: "Кто, если не ТЫ! PRO-ДОБРО",
        preview: "edededed",
        src: 'dobro',
        partner: imageguber,
        href: "/pro-dobro",
    },
];
