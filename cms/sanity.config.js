import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { news } from './schemaTypes/news.js';

export default defineConfig({
    name: 'fond-mira-news',
    title: 'Фонд Мира — новости',
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
    plugins: [structureTool()],
    schema: { types: [news] },
});
