// "use client";

import { AboutUs } from "@/widgets/AboutUs/AboutUs";
import { Contacts } from "@/entities/Contacts/Contacts";
import { NewsList } from "@/widgets/NewsList/NewsList";
import { PartnersList } from "@/widgets/PartnersList/PartnersList";
import { ProjectsList } from "@/widgets/ProjectsList/ProjectsList";
import { TopNews } from "@/widgets/TopNews/TopNews";

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
