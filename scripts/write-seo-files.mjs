import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { applySeoToHtml } from "../src/seo/applySeoHtml.js";
import { getRouteSeo, renderFeedXml, renderSitemapXml } from "../src/seo/routeSeo.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export async function writeSeoFiles() {
    const indexPath = path.join(root, "index.html");
    const indexHtml = await fs.readFile(indexPath, "utf8");
    await fs.writeFile(indexPath, applySeoToHtml(indexHtml, getRouteSeo("/")), "utf8");

    const sitemap = renderSitemapXml();
    const feed = renderFeedXml();
    await fs.writeFile(path.join(root, "public", "sitemap.xml"), sitemap, "utf8");
    await fs.writeFile(path.join(root, "public", "feed.xml"), feed, "utf8");

    return { sitemap, feed };
}

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectRun) {
    writeSeoFiles()
        .then(() => {
            console.log("Wrote index.html SEO tags, public/sitemap.xml, and public/feed.xml");
        })
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
}
