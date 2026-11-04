'use client';

import './NewsList.css';
import { MainTitle } from '@/entities/MainTitle/MainTitle';
import { TITLES, NEWS_AMT } from '@/shared/Constants';
import { News } from '../News/News';
import { DotsButton } from '@/features/DotsButton/DotsButton';
import { useEffect, useRef, useState } from 'react';
import { linkState, setLinkNewslist } from '@/store/reducers/linkSlice';
import type { NewsType } from '@/shared/models/Models';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import useLink from '@/shared/hooks/useLink';
import useLinkDeactive from '@/shared/hooks/UseLinkDeactive';
import { newsState, setNewsList } from '@/store/reducers/newsSlice';
import useSetTheHight from './lib/useSetTheHight';

type Props = { news: NewsType[]; error?: boolean; configured?: boolean };

export const NewsList = ({ news, error = false, configured = true }: Props) => {
    const sectionNews = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();
    const [index, setIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const { newslist } = useAppSelector(linkState);
    const { value } = useAppSelector(newsState);
    const pageCount = Math.ceil(news.length / NEWS_AMT);
    const safeIndex = Math.min(index, Math.max(0, pageCount - 1));
    const currentNews = news.slice(safeIndex * NEWS_AMT, (safeIndex + 1) * NEWS_AMT);

    useLinkDeactive(sectionNews, setLinkNewslist(false));
    useLink(sectionNews, newslist);
    useSetTheHight(sectionNews, safeIndex, loaded, value);

    useEffect(() => {
        dispatch(setNewsList(news));
    }, [dispatch, news]);

    // Do not show the empty news section on a site that has not enabled Sanity yet.
    if (!configured) return null;

    const handleIndex = (i: number) => {
        setIndex(i);
        dispatch(setLinkNewslist(false));
        dispatch(setLinkNewslist(true));
    };

    return (
        <section id="news-list" ref={sectionNews} className="news-list"
            onLoad={() => setLoaded(true)}
            style={{ minHeight: safeIndex === 0 ? value : undefined }}>
            <MainTitle text={TITLES.NEWS} />
            <div className="news-list__conteiner">
                {error ? (
                    <p className="text" role="status">Новости временно недоступны. Попробуйте зайти позже.</p>
                ) : news.length === 0 ? (
                    <p className="text">Пока нет опубликованных новостей.</p>
                ) : (
                    <>
                        <ul className="news-list__block">
                            {currentNews.map((post) => <News key={post._id} post={post} />)}
                        </ul>
                        {pageCount > 1 && <DotsButton length={news.length} index={handleIndex} />}
                    </>
                )}
            </div>
        </section>
    );
};
