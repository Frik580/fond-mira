// "use client";

import "./Support.css";
import Image from "next/image";

type Props = {
    partner: string;
    color?: string;
};

export const Support = ({ partner, color }: Props) => {
    return (
        <>
            {partner && (
                <>
                    <p className="support__text" style={{ color: color }}>
                        при поддержке:{" "}
                    </p>
                    <Image
                        src={`/image/partners/${partner}.png`}
                        width={140}
                        height={60}
                        className="support__image"
                        style={{ backgroundColor: color }}
                        alt=""
                    />
                </>
            )}
        </>
    );
};
