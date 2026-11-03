import { FC } from 'react';
import './NewsNoFull.css';
import { NewsType } from '@/shared/models/Models';
import Image from 'next/image';
import { NewsDate } from '@/entities/NewsElem/NewsDate/NewsDate';
import { NewsTitle } from '@/entities/NewsElem/NewsTitle/NewsTitle';

type NewsConteinerProps = { post: NewsType; onClickOpenButton: () => void };

export const NewsNoFull: FC<NewsConteinerProps> = ({ post, onClickOpenButton }) => {
    const cover = post.images?.[0];
    return <>
        <div className="news__box news_border_white">
            <div className="news__conteiner">
                <div className="news__tex">
                    <NewsDate date={post.createdAt} />
                    <div className="news__block">
                        <NewsTitle title={post.title} />
                        <p className="text">{post.preview || post.article[0]}</p>
                    </div>
                </div>
                {cover && <div className="news__img">
                    <Image src={cover.url} className="news__photo" width={250} height={250} alt={cover.alt || post.title} />
                </div>}
            </div>
        </div>
        <button className="news__button_open" type="button" onClick={onClickOpenButton}>подробнее</button>
    </>;
};
