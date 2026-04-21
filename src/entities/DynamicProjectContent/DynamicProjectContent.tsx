import { Document } from "@/entities/Document/Document";
import Image from "next/image";
import Link from "next/link";
import { ContentBlock } from "@/shared/models/Models";
import renderTextWithLinks from "@/features/RenderTextWithLinks/RenderTextWithLinks";

interface Props {
    content?: ContentBlock[];
}

export const DynamicProjectContent = ({ content }: Props) => {
    if (!content) return null;

    const renderBlock = (
        block: ContentBlock,
        index: number,
    ): React.ReactNode => {
        const renderItems = (
            items: (string | string[] | ContentBlock)[],
            listType?: "ul" | "ol",
            className?: string,
        ) => {
            const ListTag = listType === "ol" ? "ol" : "ul";
            const listClass =
                listType === "ol"
                    ? "project-card__numlist"
                    : "project-card__list";

            return (
                <ListTag
                    className={`${
                        className || listClass
                    } project-card__article`}
                >
                    {items.map((item, i) => (
                        <li key={i} className="li">
                            {Array.isArray(item) ? (
                                <div className="project-card__multi-text">
                                    {item.map((subItem, subIndex) => (
                                        <p key={subIndex}>
                                            {renderTextWithLinks(
                                                subItem as string,
                                            )}
                                        </p>
                                    ))}
                                </div>
                            ) : typeof item === "object" ? (
                                renderBlock(item as ContentBlock, i)
                            ) : (
                                renderTextWithLinks(item as string)
                            )}
                        </li>
                    ))}
                </ListTag>
            );
        };

        switch (block.type) {
            case "paragraph":
                return (
                    <div key={index} className="text project-card__multi-text">
                        {block.boldText && (
                            <p className="text project-card__title">
                                {block.boldText}
                            </p>
                        )}
                        {block.text && (
                            <p className="text">
                                {renderTextWithLinks(block.text)}
                            </p>
                        )}
                    </div>
                );

            case "goal":
                return (
                    <p key={index} className="text">
                        <span className="text project-card__title">
                            {block.title}{" "}
                        </span>
                        {renderTextWithLinks(block.text)}
                    </p>
                );

            case "list":
                return renderItems(
                    block.items || [],
                    block.listType,
                    block.className,
                );

            case "article":
                return (
                    <article key={index} className="project-card__article">
                        {block.title && (
                            <h2 className="text project-card__title">
                                {block.title}
                            </h2>
                        )}
                        {block.text && (
                            <p className="text">
                                {renderTextWithLinks(block.text)}
                            </p>
                        )}
                        {block.paragraphs?.map((p, pIndex) => (
                            <p key={pIndex} className="text">
                                {renderTextWithLinks(p)}
                            </p>
                        ))}
                        {block.items &&
                            block.items.length > 0 &&
                            renderItems(
                                block.items,
                                block.listType,
                                block.className,
                            )}
                    </article>
                );

            case "document":
                return (
                    <Document
                        key={index}
                        title={block.title}
                        href={block.href}
                    />
                );

            case "image-link":
                return block.href && block.src ? (
                    <Link
                        key={index}
                        className="project-card__qr"
                        href={block.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={block.src}
                            width={block.width || 132}
                            height={block.height || 132}
                            alt={block.title || "Image"}
                        />
                    </Link>
                ) : null;

            default:
                return null;
        }
    };

    return (
        <div className="project-card__conteiner">
            {content.map((block, index) => renderBlock(block, index))}
        </div>
    );
};
