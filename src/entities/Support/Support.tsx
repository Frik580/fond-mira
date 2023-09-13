// "use client";

import "./Support.css";
import Image from "next/image";

type Props = {
    partner: string;
};

export const Support = ({ partner }: Props) => {
    return (
        <>
            {partner && (
                // <div className="support">
                <>
                    <p className="support__text">при поддержке: </p>
                    <Image
                        src={`/image/partners/${partner}.png`}
                        width={140}
                        height={60}
                        className="support__image"
                        alt=""
                    />
                </>
                // </div>
            )}
        </>
    );
};
