import React from "react";

const HOME_URL = "https://www.dronecraft.co.in/";

export function BlogRichText({ content, className, as: Tag = "span" }) {
    if (!content) return null;

    if (typeof content === "string") {
        return <Tag className={className}>{content}</Tag>;
    }

    if (Array.isArray(content)) {
        return (
            <Tag className={className}>
                {content.map((part, index) =>
                    part.href ? (
                        <a
                            key={`${part.text}-${index}`}
                            href={part.href}
                            className={part.className || "BlogPostInlineLink"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {part.text}
                        </a>
                    ) : (
                        <React.Fragment key={`${part.text}-${index}`}>{part.text}</React.Fragment>
                    )
                )}
            </Tag>
        );
    }

    return null;
}

export { HOME_URL };
