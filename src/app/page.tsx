// "use client";

// import styles from "./page.module.css";

import { AboutUs } from "@/entities/AboutUs/AboutUs";
import { Contacts } from "@/entities/Contacts/Contacts";
import { Footer } from "@/entities/Footer/Footer";
import { Header } from "@/entities/Header/Header";
import { NewsList } from "@/entities/NewsList/NewsList";
import { Partners } from "@/entities/Partners/Partners";
import { ProjectsList } from "@/entities/ProjectsList/ProjectsList";
import { TopNews } from "@/entities/TopNews/TopNews";

export default function Home() {
    return (
        <main className="main">
            <Header />
            <TopNews />
            <AboutUs />
            <NewsList />
            <ProjectsList />
            <Partners />
            <Contacts />
            <Footer />
        </main>
    );
}
