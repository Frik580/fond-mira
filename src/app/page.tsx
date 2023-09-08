// "use client";

// import styles from "./page.module.css";

import { AboutUs } from "@/entities/AboutUs/AboutUs";
import { Contacts } from "@/entities/Contacts/Contacts";
import { NewsList } from "@/entities/NewsList/NewsList";
import { PartnersList } from "@/entities/PartnersList/PartnersList";
import { ProjectsList } from "@/entities/ProjectsList/ProjectsList";
import { TopNews } from "@/entities/TopNews/TopNews";

export default function HomePage() {
    return (
        <main className="main">
            <TopNews />
            <AboutUs />
            <NewsList />
            <ProjectsList />
            <PartnersList />
            <Contacts />
        </main>
    );
}
