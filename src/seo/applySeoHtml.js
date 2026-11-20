function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function upsertMeta(html, attribute, key, content) {
    const tag = `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`;
    const pattern = new RegExp(`<meta\\s+${attribute}=(["'])${key}\\1[^>]*>`, "i");

    if (pattern.test(html)) {
        return html.replace(pattern, tag);
    }

    return html.replace("</head>", `    ${tag}\n  </head>`);
}

function upsertTitle(html, title) {
    const tag = `<title>${escapeHtml(title)}</title>`;
    if (/<title>[\s\S]*?<\/title>/i.test(html)) {
        return html.replace(/<title>[\s\S]*?<\/title>/i, tag);
    }

    return html.replace("</head>", `    ${tag}\n  </head>`);
}

function upsertCanonical(html, href) {
    const tag = `<link rel="canonical" href="${escapeHtml(href)}" />`;
    const pattern = /<link\s+rel=(["'])canonical\1[^>]*>/i;

    if (pattern.test(html)) {
        return html.replace(pattern, tag);
    }

    return html.replace("</head>", `    ${tag}\n  </head>`);
}

function upsertJsonLd(html, jsonLd) {
    const json = JSON.stringify(jsonLd, null, 2).replace(/</g, "\\u003c");
    const tag = `<script type="application/ld+json" id="page-schema">\n${json}\n    </script>`;
    const pattern = /<script\s+type=(["'])application\/ld\+json\1[^>]*id=(["'])page-schema\2[^>]*>[\s\S]*?<\/script>/i;
    const patternAlt = /<script\s+id=(["'])page-schema\1[^>]*type=(["'])application\/ld\+json\2[^>]*>[\s\S]*?<\/script>/i;

    if (pattern.test(html)) return html.replace(pattern, tag);
    if (patternAlt.test(html)) return html.replace(patternAlt, tag);

    return html.replace("</head>", `    ${tag}\n  </head>`);
}

export function applySeoToHtml(html, seo) {
    let next = html;
    next = upsertTitle(next, seo.title);
    next = upsertMeta(next, "name", "description", seo.description);
    next = upsertMeta(next, "name", "keywords", seo.keywords);
    next = upsertMeta(next, "name", "robots", seo.robots);
    next = upsertMeta(next, "name", "author", seo.author);
    next = upsertCanonical(next, seo.canonical);
    next = upsertMeta(next, "property", "og:site_name", seo.ogSiteName);
    next = upsertMeta(next, "property", "og:url", seo.ogUrl);
    next = upsertMeta(next, "property", "og:title", seo.ogTitle);
    next = upsertMeta(next, "property", "og:type", seo.ogType);
    next = upsertMeta(next, "property", "og:description", seo.ogDescription);
    next = upsertMeta(next, "property", "og:image", seo.ogImage);
    next = upsertMeta(next, "property", "og:image:secure_url", seo.ogImage);
    next = upsertMeta(next, "property", "og:locale", "en_IN");
    next = upsertMeta(next, "name", "twitter:card", "summary_large_image");
    next = upsertMeta(next, "name", "twitter:title", seo.ogTitle);
    next = upsertMeta(next, "name", "twitter:description", seo.ogDescription);
    next = upsertMeta(next, "name", "twitter:image", seo.ogImage);
    next = upsertJsonLd(next, seo.jsonLd);
    return next;
}
