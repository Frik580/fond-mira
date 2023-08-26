// import styles from "./page.module.css";

import { AboutUs } from "@/entities/AboutUs/AboutUs";
import { Contacts } from "@/entities/Contacts/Contacts";
import { Footer } from "@/entities/Footer/Footer";
import { Header } from "@/entities/Header/Header";
import { NewsList } from "@/entities/NewsList/NewsList";
import { Partners } from "@/entities/Partners/Partners";
import { Projects } from "@/entities/Projects/Projects";
import { TopNews } from "@/entities/TopNews/TopNews";

export default function Home() {
    return (
        <main style={{ minHeight: "100vh" }}>
            <Header />
            <TopNews />
            <AboutUs />
            <NewsList />
            <Projects />
            <Partners />
            <Contacts />
            <Footer />
        </main>
    );
}
