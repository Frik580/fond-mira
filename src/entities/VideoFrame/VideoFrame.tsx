// "use client";

import "./VideoFrame.css";
import { memo } from "react";

type VideoFraimeType = {
    video: string;
};

const VideoFraime = memo(function VideoFrame({ video }: VideoFraimeType) {

    return (
        <div className="video__conteiner">
            <iframe
                src={video}
                className="video__iframe"
                title={`фрайм`}
                allowFullScreen
            />
        </div>
    );
});

export default VideoFraime;
