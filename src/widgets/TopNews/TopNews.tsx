// "use client";

import "./TopNews.css";
import { TopImage } from "@/entities/TopImage/TopImage";
import { TOP_NEWS_COVER, TOP_NEWS_COVER_LITE, TOP_NEWS_COVER_MOBILE, TOP_NEWS_COVER_PC, TOP_NEWS_COVER_TABLET} from "@/shared/Constants";

export const TopNews = () => {
    return (
        <section className="top-news">
            <TopImage 
                src={TOP_NEWS_COVER} 
                srcPC={TOP_NEWS_COVER_PC} 
                srcTablet={TOP_NEWS_COVER_TABLET} 
                srcMobile={TOP_NEWS_COVER_MOBILE} 
                srclite={TOP_NEWS_COVER_LITE} 
            />
        </section>
    );
};
