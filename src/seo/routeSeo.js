import { blogs, blogsPageMeta } from "../Components/Blogs/blogsData.js";
import { getBlogPost, getBlogUrlSlug } from "../Components/Blogs/blogPosts/index.js";
import {
    BUSINESS,
    BUSINESS_ID,
    CONTENT_UPDATED,
    POLICY_UPDATED,
    RAFTING_OFFERS,
    SITE_NAME,
    SITE_ORIGIN,
    WEBSITE_ID,
    toAbsoluteUrl,
    toPublicUrl,
} from "./site.js";

const ROBOTS = "index, follow, max-image-preview:large";

const HOME_DESCRIPTION =
    "Book river rafting in Rishikesh with premium safety, expert guides, and top rafting routes from Shivpuri, Brahmpuri, and Marine Drive. Experience the best river rafting in Uttarakhand with Drone Craft.";

const PAGES = {
    "/": {
        title: "River Rafting in Rishikesh | Best River Rafting in Uttarakhand – Drone Craft",
        description: HOME_DESCRIPTION,
        keywords:
            "river rafting in Rishikesh, best river rafting in Uttarakhand, Drone Craft rafting, Shivpuri rafting, Brahmpuri rafting, Marine Drive rafting, Ganga rafting",
        ogTitle: "River Rafting in Rishikesh | Best River Rafting in Uttarakhand",
        ogType: "website",
        changefreq: "weekly",
        priority: "1.0",
        lastmod: CONTENT_UPDATED,
    },
    "/blogs": {
        title: blogsPageMeta.metaTitle,
        description: blogsPageMeta.metaDescription,
        keywords: blogsPageMeta.metaKeywords,
        ogTitle: blogsPageMeta.metaTitle,
        ogType: "website",
        changefreq: "weekly",
        priority: "0.8",
        lastmod: CONTENT_UPDATED,
    },
    "/privacy-policy": {
        title: "Privacy Policy | Drone Craft",
        description:
            "Read Drone Craft's privacy policy covering personal information usage, cookies, data practices, and contact details.",
        keywords: "Drone Craft privacy policy, rafting booking privacy, Rishikesh rafting data policy",
        ogTitle: "Privacy Policy | Drone Craft",
        ogType: "website",
        changefreq: "yearly",
        priority: "0.3",
        lastmod: POLICY_UPDATED,
    },
    "/terms-and-condition": {
        title: "Terms And Condition | Drone Craft",
        description:
            "Read Drone Craft Terms And Condition including eligibility, usage rules, cookies, links, liability, and dispute resolution.",
        keywords: "Drone Craft terms and conditions, rafting eligibility Rishikesh, booking terms",
        ogTitle: "Terms And Condition | Drone Craft",
        ogType: "website",
        changefreq: "yearly",
        priority: "0.3",
        lastmod: POLICY_UPDATED,
    },
    "/return-refund": {
        title: "Return & Refund | Drone Craft",
        description:
            "Read Drone Craft Return & Refund Policy including cancellation windows, refund timelines, and extraordinary circumstances.",
        keywords: "Drone Craft refund policy, rafting cancellation Rishikesh, booking refund",
        ogTitle: "Return & Refund | Drone Craft",
        ogType: "website",
        changefreq: "yearly",
        priority: "0.3",
        lastmod: POLICY_UPDATED,
    },
};

function normalizePath(pathname) {
    const path = decodeURIComponent(String(pathname ?? "/").split("?")[0].split("#")[0]);
    if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
    return path || "/";
}

function businessNode(includeOffers) {
    const node = {
        "@type": ["LocalBusiness", "SportsActivityLocation"],
        "@id": BUSINESS_ID,
        name: BUSINESS.name,
        legalName: BUSINESS.legalName,
        url: `${SITE_ORIGIN}/`,
        image: BUSINESS.image,
        logo: {
            "@type": "ImageObject",
            url: BUSINESS.logo,
        },
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        priceRange: BUSINESS.priceRange,
        currenciesAccepted: "INR",
        address: {
            "@type": "PostalAddress",
            ...BUSINESS.address,
        },
        areaServed: {
            "@type": "City",
            name: "Rishikesh",
        },
        sameAs: BUSINESS.sameAs,
        contactPoint: {
            "@type": "ContactPoint",
            telephone: BUSINESS.telephone,
            email: BUSINESS.email,
            contactType: "reservations",
            areaServed: "IN",
            availableLanguage: "English",
        },
    };

    if (includeOffers) {
        node.hasOfferCatalog = {
            "@type": "OfferCatalog",
            name: "Rishikesh river rafting packages",
            itemListElement: RAFTING_OFFERS.map((offer) => ({
                "@type": "Offer",
                name: offer.name,
                price: offer.price,
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                url: `${SITE_ORIGIN}/#activities`,
                image: toAbsoluteUrl(offer.image),
                itemOffered: {
                    "@type": "Service",
                    name: offer.name,
                    description: offer.description,
                    serviceType: "River rafting",
                    provider: { "@id": BUSINESS_ID },
                    areaServed: "Rishikesh, Uttarakhand",
                },
            })),
        };
    }

    return node;
}

function websiteNode() {
    return {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_ORIGIN}/`,
        name: SITE_NAME,
        description: HOME_DESCRIPTION,
        inLanguage: "en-IN",
        publisher: { "@id": BUSINESS_ID },
    };
}

function breadcrumbNode(items) {
    return {
        "@type": "BreadcrumbList",
        "@id": `${items.at(-1).url}#breadcrumb`,
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

function webPageNode({ url, title, description, image, type = "WebPage" }) {
    return {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BUSINESS_ID },
        inLanguage: "en-IN",
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: image,
        },
    };
}

function graph(nodes) {
    return {
        "@context": "https://schema.org",
        "@graph": nodes,
    };
}

function blogEntries() {
    return blogs.map((blog) => {
        const post = getBlogPost(blog.slug);
        const urlSlug = getBlogUrlSlug(post ?? blog);
        const path = `/blogs/news/${urlSlug}`;

        return {
            path,
            post,
            blog,
            changefreq: "monthly",
            priority: "0.7",
            lastmod: CONTENT_UPDATED,
        };
    });
}

function findBlogEntry(pathname) {
    return blogEntries().find((entry) => normalizePath(entry.path) === pathname) ?? null;
}

export function getIndexableRoutes() {
    const staticPaths = ["/", "/blogs", "/privacy-policy", "/terms-and-condition", "/return-refund"];
    const posts = blogEntries().map(({ path, changefreq, priority, lastmod }) => ({
        path,
        changefreq,
        priority,
        lastmod,
    }));
    const staticRoutes = staticPaths.map((path) => ({
        path,
        changefreq: PAGES[path].changefreq,
        priority: PAGES[path].priority,
        lastmod: PAGES[path].lastmod,
    }));

    return [
        staticRoutes[0],
        staticRoutes[1],
        ...posts,
        ...staticRoutes.slice(2),
    ];
}

export function getPrerenderRoutes() {
    return getIndexableRoutes().map((route) => route.path);
}

function pageSeo(pathname, page, crumbs, extraNodes = []) {
    const url = toPublicUrl(pathname);
    const image = page.image ?? BUSINESS.logo;
    const ogImage = page.ogImage ?? image;

    return {
        title: page.title,
        description: page.description,
        keywords: page.keywords ?? "",
        canonical: url,
        robots: ROBOTS,
        author: SITE_NAME,
        ogSiteName: SITE_NAME,
        ogTitle: page.ogTitle ?? page.title,
        ogDescription: page.description,
        ogUrl: url,
        ogType: page.ogType ?? "website",
        ogImage,
        jsonLd: graph([
            businessNode(pathname === "/"),
            websiteNode(),
            webPageNode({
                url,
                title: page.title,
                description: page.description,
                image,
                type: page.pageType ?? "WebPage",
            }),
            ...(crumbs.length > 1 ? [breadcrumbNode(crumbs)] : []),
            ...extraNodes,
        ]),
    };
}

export function getRouteSeo(pathname) {
    const path = normalizePath(pathname);
    const staticPage = PAGES[path];

    if (staticPage && path === "/") {
        return pageSeo(
            path,
            { ...staticPage, image: BUSINESS.image, ogImage: BUSINESS.logo, pageType: "WebPage" },
            [{ name: "Home", url: toPublicUrl("/") }]
        );
    }

    if (staticPage && path === "/blogs") {
        const posts = blogEntries();
        return pageSeo(
            path,
            { ...staticPage, pageType: "CollectionPage" },
            [
                { name: "Home", url: toPublicUrl("/") },
                { name: "Blog", url: toPublicUrl("/blogs") },
            ],
            [
                {
                    "@type": "Blog",
                    "@id": `${toPublicUrl("/blogs")}#blog`,
                    name: "Drone Craft Blog",
                    description: staticPage.description,
                    url: toPublicUrl("/blogs"),
                    publisher: { "@id": BUSINESS_ID },
                    blogPost: posts.map((entry) => ({
                        "@type": "BlogPosting",
                        headline: entry.post?.title ?? entry.blog.title,
                        url: toPublicUrl(entry.path),
                        image: toAbsoluteUrl(entry.post?.image ?? entry.blog.image),
                    })),
                },
            ]
        );
    }

    if (staticPage) {
        const crumbName = staticPage.title.replace(" | Drone Craft", "");
        return pageSeo(path, staticPage, [
            { name: "Home", url: toPublicUrl("/") },
            { name: crumbName, url: toPublicUrl(path) },
        ]);
    }

    const blogMatch = path.startsWith("/blogs/") ? findBlogEntry(path.replace(/^\/blogs\/(?!news\/)/, "/blogs/news/")) : null;
    const entry = blogMatch ?? findBlogEntry(path);

    if (!entry?.post) return getRouteSeo("/");

    const post = entry.post;
    const url = toPublicUrl(entry.path);
    const image = toAbsoluteUrl(post.image);

    return pageSeo(
        entry.path,
        {
            title: post.metaTitle,
            description: post.metaDescription,
            keywords: post.metaKeywords,
            ogTitle: post.metaTitle,
            ogType: "article",
            image,
            pageType: "ItemPage",
        },
        [
            { name: "Home", url: toPublicUrl("/") },
            { name: "Blog", url: toPublicUrl("/blogs") },
            { name: post.metaTitle, url },
        ],
        [
            {
                "@type": "BlogPosting",
                "@id": `${url}#article`,
                headline: post.title,
                description: post.metaDescription,
                image,
                inLanguage: "en-IN",
                mainEntityOfPage: { "@id": `${url}#webpage` },
                author: {
                    "@type": "Organization",
                    name: SITE_NAME,
                    url: `${SITE_ORIGIN}/`,
                },
                publisher: {
                    "@type": "Organization",
                    name: SITE_NAME,
                    logo: {
                        "@type": "ImageObject",
                        url: BUSINESS.logo,
                    },
                },
                url,
            },
        ]
    );
}

function escapeXml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

export function renderSitemapXml() {
    const urls = getIndexableRoutes()
        .map(
            (route) => `  <url>
    <loc>${escapeXml(toPublicUrl(route.path))}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
        )
        .join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function renderFeedXml() {
    const items = blogEntries()
        .map((entry) => {
            const url = toPublicUrl(entry.path);
            const title = entry.post?.metaTitle ?? entry.blog.title;
            const description = entry.post?.metaDescription ?? entry.blog.title;

            return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(description)}</description>
    </item>`;
        })
        .join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Drone Craft Blog</title>
    <link>${escapeXml(toPublicUrl("/blogs"))}</link>
    <description>${escapeXml(blogsPageMeta.metaDescription)}</description>
    <language>en-in</language>
${items}
  </channel>
</rss>
`;
}
