// "use client";

import "./VideoFrame.css";
import { memo, useEffect, useState } from "react";

interface VideoFraimeProps {
    video: string;
    title: string;
}

const VideoFraime = memo(function VideoFrame({
    video,
    title,
}: VideoFraimeProps) {
    const [vissible, setVissible] = useState(true);

    async function fetchVideo() {
        await fetch(`${video}`, { mode: "no-cors" })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                if (err.name === "TypeError") {
                    setVissible(false);
                } else {
                    setVissible(true);
                }
            });
    }
    useEffect(() => {
        fetchVideo();
    }, [video]);

    return (
        <>
            {vissible && (
                <div className="video__conteiner">
                    <iframe
                        src={video}
                        className="video__iframe"
                        title={title}
                        allowFullScreen
                    />
                </div>
            )}
        </>
    );
});

export default VideoFraime;
