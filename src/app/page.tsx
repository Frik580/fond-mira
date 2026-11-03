import { AboutUs } from '@/widgets/AboutUs/AboutUs';
import { Contacts } from '@/entities/Contacts/Contacts';
import { NewsList } from '@/widgets/NewsList/NewsList';
import { PartnersList } from '@/widgets/PartnersList/PartnersList';
import { ProjectsList } from '@/widgets/ProjectsList/ProjectsList';
import { TopNews } from '@/widgets/TopNews/TopNews';
import { getPublishedNews } from '@/shared/sanity/news';
import { Suspense } from 'react';

export default async function HomePage() {
    const { news, error, configured } = await getPublishedNews();

    return (
        <main className="main">
            <Suspense fallback={<p>Загрузка...</p>}><TopNews /></Suspense>
            <Suspense fallback={<p>Загрузка...</p>}><AboutUs /></Suspense>
            <NewsList news={news} error={error} configured={configured} />
            <Suspense fallback={<p>Загрузка...</p>}><ProjectsList /></Suspense>
            <Suspense fallback={<p>Загрузка...</p>}><PartnersList /></Suspense>
            <Suspense fallback={<p>Загрузка...</p>}><Contacts /></Suspense>
        </main>
    );
}
