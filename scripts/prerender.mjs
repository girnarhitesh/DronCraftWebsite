import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const PRERENDER_ROUTES = [
    "/",
    "/privacy-policy",
    "/terms-and-condition",
    "/return-refund",
    "/blogs",
    "/blogs/news/drone-rafting-video-vs-gopro-rishikesh",
    "/blogs/news/aerial-rafting-videos-in-rishikesh",
    "/blogs/news/a-complete-guide-to-rafting-in-rishikesh-for-first-timers",
    "/blogs/news/how-much-does-rishikesh-rafting-cost-your-ultimate-guide-to-pricing",
    "/blogs/news/White-Water-Rafting in-rishikesh",
    "/blogs/news/why-rafting-in-rishikesh-is-the-ultimate-adventure",
];

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
    await buildServerBundle();

    const template = await fs.readFile(templatePath, "utf-8");
    const serverEntry = path.join(serverDir, "entry-server.js");
    const { render } = await import(pathToFileURL(serverEntry).href);

    for (const route of PRERENDER_ROUTES) {
        const appHtml = render(route);
        const html = injectAppHtml(template, appHtml);
        const outputPath = routeToOutputPath(route);

        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await fs.writeFile(outputPath, html, "utf-8");
        console.log(`Prerendered ${route} -> ${path.relative(root, outputPath)}`);
    }

    await fs.rm(serverDir, { recursive: true, force: true });
    console.log("Prerender complete.");
}

prerender().catch((error) => {
    console.error(error);
    process.exit(1);
});
