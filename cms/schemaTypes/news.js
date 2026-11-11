import { defineType, defineField, defineArrayMember } from 'sanity';

export const news = defineType({
    name: 'news',
    type: 'document',
    title: 'Новости',
    fields: [
        defineField({
            name: 'title', type: 'string', title: 'Заголовок',
            validation: (rule) => rule.required().max(180),
        }),
        defineField({
            name: 'slug', type: 'slug', title: 'Адрес новости',
            description: 'Заполняется автоматически из заголовка.',
            options: { source: 'title', maxLength: 96 },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'publishedAt', type: 'datetime', title: 'Дата публикации',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'excerpt', type: 'text', title: 'Краткое описание',
            rows: 3,
            validation: (rule) => rule.max(500),
        }),
        defineField({
            name: 'body', type: 'array', title: 'Текст новости',
            of: [defineArrayMember({ type: 'block' })],
            validation: (rule) => rule.required().min(1),
        }),
        defineField({
            name: 'images', type: 'array', title: 'Фотографии',
            of: [defineArrayMember({
                type: 'image', options: { hotspot: true },
                fields: [defineField({ name: 'alt', type: 'string', title: 'Подпись / описание фото' })],
            })],
        }),
        defineField({
            name: 'videos', type: 'array', title: 'Ссылки на видео (iframe)',
            of: [defineArrayMember({ type: 'url' })],
            description: 'Ссылки на видео, разрешённые для встраивания. Например, плеер VK Видео.',
        }),
    ],
    orderings: [{ title: 'Новые сначала', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
    preview: {
        select: { title: 'title', subtitle: 'publishedAt', media: 'images.0' },
    },
});
