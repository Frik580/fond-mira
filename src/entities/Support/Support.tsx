// "use client";

import { FC } from "react";
import "./Support.css";
import Image from "next/image";

type SupportProps = {
    partner: string;
    color?: string;
    text?: boolean;
};

export const Support: FC<SupportProps> = ({ partner, color, text }) => {
    return (
        <>
            {partner && (
                <>
                    {text && (
                        <p className="support__text" style={{ color: color }}>
                            при поддержке:{" "}
                        </p>
                    )}
                    <Image
                        src={require(`@/shared/image/partners/${partner}.png`)}
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
