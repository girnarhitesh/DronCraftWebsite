const SITE_ORIGIN = "https://www.dronecraft.co.in";

export const DEFAULT_PAGE_META = {
    title: "River Rafting in Rishikesh | Best River Rafting in Uttarakhand – Drone Craft",
    description:
        "Book river rafting in Rishikesh with premium safety, expert guides, and top rafting routes from Shivpuri, Brahmpuri, and Marine Drive. Experience the best river rafting in Uttarakhand with Drone Craft.",
    keywords: "",
    canonical: `${SITE_ORIGIN}/`,
    ogTitle: "River Rafting in Rishikesh | Best River Rafting in Uttarakhand",
    ogDescription:
        "Book river rafting in Rishikesh with premium safety, expert guides, and top rafting routes from Shivpuri, Brahmpuri, and Marine Drive. Experience the best river rafting in Uttarakhand with Drone Craft.",
    ogUrl: `${SITE_ORIGIN}/`,
    ogType: "website",
    ogImage: `${SITE_ORIGIN}/Images/UpdatedDroneCraftLogo.png`,
};

function setNamedMeta(name, content) {
    if (!content) return;

    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
}

function setPropertyMeta(property, content) {
    if (!content) return;

    let tag = document.querySelector(`meta[property="${property}"]`);
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

export function toAbsoluteUrl(path) {
    if (!path) return DEFAULT_PAGE_META.ogImage;
    if (path.startsWith("http://") || path.startsWith("https://")) return path;
    return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function applyPageMeta(meta) {
    document.title = meta.title;

    setNamedMeta("description", meta.description);
    setNamedMeta("keywords", meta.keywords);
    setCanonical(meta.canonical);

    setPropertyMeta("og:site_name", "Drone Craft");
    setPropertyMeta("og:title", meta.ogTitle ?? meta.title);
    setPropertyMeta("og:description", meta.ogDescription ?? meta.description);
    setPropertyMeta("og:url", meta.ogUrl ?? meta.canonical);
    setPropertyMeta("og:type", meta.ogType ?? "website");
    setPropertyMeta("og:image", meta.ogImage);

    setNamedMeta("twitter:card", "summary_large_image");
    setNamedMeta("twitter:title", meta.ogTitle ?? meta.title);
    setNamedMeta("twitter:description", meta.ogDescription ?? meta.description);
    setNamedMeta("twitter:image", meta.ogImage);
}

export function resetPageMeta() {
    applyPageMeta(DEFAULT_PAGE_META);
}
