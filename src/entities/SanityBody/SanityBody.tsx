import type { SanityBlock } from '@/shared/models/Models';
import type { ReactNode } from 'react';

type Props = { blocks?: SanityBlock[] };

function safeHref(value: string | undefined): string | undefined {
    if (!value) return undefined;
    try {
        const url = new URL(value);
        return url.protocol === 'https:' || url.protocol === 'http:' ? value : undefined;
    } catch {
        return undefined;
    }
}

function renderContent(block: SanityBlock): ReactNode {
    return (block.children || []).map((span, index) => {
        let content: ReactNode = span.text || '';
        const marks = span.marks || [];
        for (const mark of marks) {
            if (mark === 'strong') content = <strong key={mark}>{content}</strong>;
            if (mark === 'em') content = <em key={mark}>{content}</em>;
            const definition = block.markDefs?.find((item) => item._key === mark && item._type === 'link');
            if (definition) {
                const href = safeHref(definition.href);
                if (href) content = <a key={mark} href={href} className="link" target="_blank" rel="noopener noreferrer">{content}</a>;
            }
        }
        return <span key={span._key || index}>{content}</span>;
    });
}

export function SanityBody({ blocks = [] }: Props) {
    return <>
        {blocks.filter((block) => block._type === 'block').map((block, index) => {
            const content = renderContent(block);
            const key = block._key || index;
            if (block.listItem === 'bullet') return <ul key={key} className="text"><li>{content}</li></ul>;
            if (block.listItem === 'number') return <ol key={key} className="text"><li>{content}</li></ol>;
            if (block.style === 'h2') return <h2 key={key} className="text">{content}</h2>;
            if (block.style === 'h3') return <h3 key={key} className="text">{content}</h3>;
            return <p key={key} className="text">{content}</p>;
        })}
    </>;
}
