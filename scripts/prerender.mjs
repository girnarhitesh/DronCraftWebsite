import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";
import { applySeoToHtml } from "../src/seo/applySeoHtml.js";
import { getPrerenderRoutes, getRouteSeo } from "../src/seo/routeSeo.js";
import { writeSeoFiles } from "./write-seo-files.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const serverDir = path.join(distDir, "server");
const templatePath = path.join(distDir, "index.html");
const placeholder = "<!--app-html-->";

async function buildServerBundle() {
    await build({
        root,
        logLevel: "error",
        build: {
            ssr: "src/entry-server.jsx",
            outDir: "dist/server",
            emptyOutDir: true,
            rollupOptions: {
                output: {
                    entryFileNames: "entry-server.js",
                },
            },
        },
        ssr: {
            noExternal: true,
        },
    });
}

function injectAppHtml(template, appHtml) {
    if (!template.includes(placeholder)) {
        throw new Error(`Missing ${placeholder} placeholder in dist/index.html`);
    }

    return template.replace(placeholder, appHtml);
}

function routeToOutputPath(route) {
    if (route === "/") {
        return templatePath;
    }

    const segments = route
        .replace(/^\//, "")
        .split("/")
        .map((segment) => decodeURIComponent(segment));

    return path.join(distDir, ...segments, "index.html");
}

async function prerender() {
    const { sitemap, feed } = await writeSeoFiles();
    await buildServerBundle();

    const template = await fs.readFile(templatePath, "utf-8");
    const serverEntry = path.join(serverDir, "entry-server.js");
    const { render } = await import(pathToFileURL(serverEntry).href);

    for (const route of getPrerenderRoutes()) {
        const appHtml = render(route);
        const html = applySeoToHtml(injectAppHtml(template, appHtml), getRouteSeo(route));
        const outputPath = routeToOutputPath(route);

        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await fs.writeFile(outputPath, html, "utf-8");
        console.log(`Prerendered ${route} -> ${path.relative(root, outputPath)}`);
    }

    await fs.writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf-8");
    await fs.writeFile(path.join(distDir, "feed.xml"), feed, "utf-8");
    await fs.rm(serverDir, { recursive: true, force: true });
    console.log("Prerender complete.");
}

prerender().catch((error) => {
    console.error(error);
    process.exit(1);
});
