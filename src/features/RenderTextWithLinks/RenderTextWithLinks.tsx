const renderTextWithLinks = (text: string | undefined) => {
    if (!text) return null;
    const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
    return parts.map((part, index) => {
        const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (match) {
            return (
                <a
                    key={index}
                    href={match[2]}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {match[1]}
                </a>
            );
        }
        return part;
    });
};

export default renderTextWithLinks