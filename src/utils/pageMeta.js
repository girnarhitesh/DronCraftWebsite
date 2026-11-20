import { getRouteSeo } from "../seo/routeSeo.js";
import { toAbsoluteUrl } from "../seo/site.js";

export { toAbsoluteUrl };

const SCHEMA_ID = "page-schema";

export const DEFAULT_PAGE_META = getRouteSeo("/");

function setNamedMeta(name, content) {
    let tag = document.querySelector(`meta[name="${name}"]`);

    if (!content) {
        tag?.remove();
        return;
    }

    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
    }

    tag.setAttribute("content", content);
}

function setPropertyMeta(property, content) {
    let tag = document.querySelector(`meta[property="${property}"]`);

    if (!content) {
        tag?.remove();
        return;
    }

    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
    }

    tag.setAttribute("content", content);
}

function setCanonical(href) {
    if (!href) return;

    let tag = document.querySelector('link[rel="canonical"]');
    if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", "canonical");
        document.head.appendChild(tag);
    }
    tag.setAttribute("href", href);
}

function setJsonLd(jsonLd) {
    let tag = document.getElementById(SCHEMA_ID);

    if (!jsonLd) {
        tag?.remove();
        return;
    }

    if (!tag) {
        tag = document.createElement("script");
        tag.id = SCHEMA_ID;
        tag.type = "application/ld+json";
        document.head.appendChild(tag);
    }

    tag.textContent = JSON.stringify(jsonLd);
}

export function applyPageMeta(meta) {
    document.title = meta.title;

    setNamedMeta("description", meta.description);
    setNamedMeta("keywords", meta.keywords);
    setNamedMeta("robots", meta.robots);
    setNamedMeta("author", meta.author);
    setCanonical(meta.canonical);

    setPropertyMeta("og:site_name", meta.ogSiteName ?? "Drone Craft");
    setPropertyMeta("og:title", meta.ogTitle ?? meta.title);
    setPropertyMeta("og:description", meta.ogDescription ?? meta.description);
    setPropertyMeta("og:url", meta.ogUrl ?? meta.canonical);
    setPropertyMeta("og:type", meta.ogType ?? "website");
    setPropertyMeta("og:image", meta.ogImage);
    setPropertyMeta("og:image:secure_url", meta.ogImage);
    setPropertyMeta("og:locale", "en_IN");

    setNamedMeta("twitter:card", "summary_large_image");
    setNamedMeta("twitter:title", meta.ogTitle ?? meta.title);
    setNamedMeta("twitter:description", meta.ogDescription ?? meta.description);
    setNamedMeta("twitter:image", meta.ogImage);
    setJsonLd(meta.jsonLd);
}

export function applyRouteSeo(pathname) {
    applyPageMeta(getRouteSeo(pathname));
}

export function resetPageMeta() {
    applyPageMeta(DEFAULT_PAGE_META);
}
