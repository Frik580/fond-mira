import type { NewsType, SanityBlock } from '@/shared/models/Models';

// Public, published Sanity documents only. No write credentials in the website.
const QUERY = `*[_type == "news" && !(_id in path("drafts.**")) && !(_id in path("versions.**")) && (!defined(publishedAt) || publishedAt <= now())]
  | order(coalesce(publishedAt, _createdAt) desc)[0...80]{
    _id,
    title,
    "slug": slug.current,
    "date": coalesce(publishedAt, _createdAt),
    "preview": coalesce(excerpt, ""),
    "body": coalesce(body, []),
    "images": images[]{"url": asset->url, "alt": alt},
    "video": coalesce(videos, [])
  }`;

type RawNews = {
    _id: string;
    title: string;
    slug?: string;
    date: string;
    preview?: string;
    body?: SanityBlock[];
    images?: { url?: string; alt?: string }[];
    video?: string[];
};

export type NewsResponse = { news: NewsType[]; error: boolean; configured: boolean };

const summaryOf = (blocks: SanityBlock[] = []): string =>
    blocks
        .filter((block) => block._type === 'block')
        .flatMap((block) => block.children || [])
        .map((child) => child.text || '')
        .join(' ')
        .slice(0, 240);

export async function getPublishedNews(): Promise<NewsResponse> {
    const projectId = process.env.SANITY_PROJECT_ID;
    const dataset = process.env.SANITY_DATASET || 'production';

    // The existing Vercel deployment can still build before Sanity is connected.
    if (!projectId) return { news: [], error: false, configured: false };

    if (!/^[a-z0-9-]+$/.test(projectId) || !/^[a-zA-Z0-9_-]+$/.test(dataset)) {
        console.error('Invalid Sanity configuration');
        return { news: [], error: true, configured: true };
    }

    const url = new URL(`https://${projectId}.apicdn.sanity.io/v2026-11-01/data/query/${dataset}`);
    url.searchParams.set('query', QUERY);

    try {
        const response = await fetch(url.toString(), { next: { revalidate: 60 } });
        if (!response.ok) throw new Error(`Sanity responded ${response.status}`);

        const payload: { result?: RawNews[] } = await response.json();
        if (!Array.isArray(payload.result)) throw new Error('Unexpected news payload');

        const news: NewsType[] = payload.result.map((post) => {
            const images = (post.images || [])
                .filter((image): image is { url: string; alt?: string } => Boolean(image?.url))
                .map((image) => ({ url: image.url, alt: image.alt || post.title }));
            const preview = post.preview || summaryOf(post.body);
            const date = new Date(post.date);

            return {
                _id: post._id,
                title: post.title,
                slug: post.slug || post._id,
                createdAt: Number.isNaN(date.getTime())
                    ? post.date
                    : date.toLocaleDateString('ru-RU', { timeZone: 'Asia/Yekaterinburg' }),
                tags: [],
                preview,
                article: [preview],
                photo: images.length,
                video: post.video || [],
                body: post.body || [],
                images,
            };
        });
        return { news, error: false, configured: true };
    } catch (error) {
        console.error('Cannot load published news from Sanity', error);
        return { news: [], error: true, configured: true };
    }
}
