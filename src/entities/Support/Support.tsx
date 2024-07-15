// "use client";

import { FC } from "react";
import "./Support.css";
import Image from "next/image";
import { PARTNERS_PERMISSION, SERVER_URL_PARTNERS } from "@/shared/Constants";

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
                        src={`${SERVER_URL_PARTNERS}${partner}.${PARTNERS_PERMISSION}`}
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
