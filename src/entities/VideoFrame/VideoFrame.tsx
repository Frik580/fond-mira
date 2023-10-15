// "use client";

import "./VideoFrame.css";
import { memo, useEffect, useState } from "react";

type VideoFraimeType = {
    video: string;
};

const VideoFraime = memo(function VideoFrame({ video }: VideoFraimeType) {
    const [vissible, setVissible] = useState(true);
    useEffect(() => {
        fetchVideo();
    }, []);

    const fetchVideo = async () => {
        await fetch(`${video}`, { mode: "no-cors" })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log(err);
                if (err.name === "TypeError") {
                    setVissible(false);
                } else {
                    setVissible(true);
                }
            });
    };

    return (
        <>
            {vissible && (
                <div className="video__conteiner">
                    <iframe
                        src={video}
                        className="video__iframe"
                        title={`фрайм`}
                        allowFullScreen
                    />
                </div>
            )}
        </>
    );
});

export default VideoFraime;
