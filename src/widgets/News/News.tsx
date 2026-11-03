'use client';

import { FC, useState } from 'react';
import './News.css';
import { NewsType } from '@/shared/models/Models';
import { NewsNoFull } from '@/widgets/NewsNoFull/NewsNoFull';
import { NewsFull } from '@/widgets/NewsFull/NewsFull';

type NewsProps = { post: NewsType };

export const News: FC<NewsProps> = ({ post }) => {
    const [fullNews, setFullNews] = useState(false);
    return (
        <li className={`news ${!fullNews ? 'news_nofull' : ''}`}>
            {!fullNews ? (
                <NewsNoFull post={post} onClickOpenButton={() => setFullNews(true)} />
            ) : (
                <NewsFull post={post} onClickCloseButton={() => setFullNews(false)} />
            )}
        </li>
    );
};
