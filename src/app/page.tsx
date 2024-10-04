// "use client";

import { AboutUs } from "@/widgets/AboutUs/AboutUs";
import { Contacts } from "@/entities/Contacts/Contacts";
import { NewsList } from "@/widgets/NewsList/NewsList";
import { PartnersList } from "@/widgets/PartnersList/PartnersList";
import { ProjectsList } from "@/widgets/ProjectsList/ProjectsList";
import { TopNews } from "@/widgets/TopNews/TopNews";
import { Suspense } from "react";

export default function HomePage() {
    return (
        <main className="main">
            <Suspense fallback={<p>Loading top news...</p>}>
                <TopNews />
            </Suspense>
            <Suspense fallback={<p>Loading about us...</p>}>
                <AboutUs />
            </Suspense>
            <Suspense fallback={<p>Loading news...</p>}>
                <NewsList />
            </Suspense>
            <Suspense fallback={<p>Loading projects...</p>}>
                <ProjectsList />
            </Suspense>
            <Suspense fallback={<p>Loading partners...</p>}>
                <PartnersList />
            </Suspense>
            <Suspense fallback={<p>Loading contacts...</p>}>
                <Contacts />
            </Suspense>
        </main>
    );
}
