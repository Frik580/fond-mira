import dynamic from 'next/dynamic';
import { FC } from 'react';
import './NewsFull.css';
import { NewsType } from '@/shared/models/Models';
import VideoFrame from '@/entities/VideoFrame/VideoFrame';
import { NewsDate } from '@/entities/NewsElem/NewsDate/NewsDate';
import { NewsTitle } from '@/entities/NewsElem/NewsTitle/NewsTitle';
import { SanityBody } from '@/entities/SanityBody/SanityBody';

const NewCarousel = dynamic(() => import('@/widgets/NewCarousel/NewCarousel').then((mod) => mod.NewCarousel), { ssr: false });

type NewsConteinerProps = { post: NewsType; onClickCloseButton: () => void };

export const NewsFull: FC<NewsConteinerProps> = ({ post, onClickCloseButton }) => {
    const imageUrls = (post.images || []).map((image) => image.url);

    return <div className="news__box news_border_pink">
        <NewsDate date={post.createdAt} />
        <NewsTitle title={post.title} />
        <div className="news__article">
            {post.body?.length ? <SanityBody blocks={post.body} /> : post.article.map((item, i) => (
                <p key={i} className="text">{item}</p>
            ))}
        </div>
        {post.video?.length > 0 && <div className="news__video">
            {post.video.map((item, i) => <VideoFrame key={i} video={item} title={post.title} />)}
        </div>}
        {imageUrls.length > 0 && <NewCarousel
            photo={imageUrls.length}
            server=""
            extension="webp"
            imageUrls={imageUrls}
            height={350}
        />}
        <button className="news__button_close" onClick={onClickCloseButton} aria-label="Закрыть новость" type="button" />
    </div>;
};
