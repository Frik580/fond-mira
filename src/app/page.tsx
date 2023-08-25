// import styles from "./page.module.css";

import { AboutUs } from "@/entities/AboutUs/AboutUs";
import { Header } from "@/entities/Header/Header";
import { TopNews } from "@/entities/TopNews/TopNews";

export default function Home() {
    return (
        <main style={{ minHeight: "100vh" }}>
            <Header />
            <TopNews />
            <AboutUs />
            <p>SECTION</p>
        </main>
    );
}
