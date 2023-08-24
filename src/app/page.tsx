// import styles from "./page.module.css";

import { Header } from "@/entities/Header/Header"
import { TopNews } from "@/entities/TopNews/TopNews";

export default function Home() {
    return (
        <main style={{minHeight: '100vh'}}>
            <Header />
            <TopNews />
            <p>SECTION</p>
        </main>
    );
}
