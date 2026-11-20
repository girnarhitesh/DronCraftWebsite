import { aCompleteGuideFirstTimers } from "./aCompleteGuideFirstTimers.js";
import { raftingCostGuide } from "./raftingCostGuide.js";
import { whiteWaterRaftingDroneCraft } from "./whiteWaterRaftingDroneCraft.js";
import { ultimateAdventure } from "./ultimateAdventure.js";
import { droneRaftingVideoVsGopro } from "./droneRaftingVideoVsGopro.js";
import { aerialRaftingVideosRishikesh } from "./aerialRaftingVideosRishikesh.js";

const allPosts = [
    droneRaftingVideoVsGopro,
    aerialRaftingVideosRishikesh,
    aCompleteGuideFirstTimers,
    raftingCostGuide,
    whiteWaterRaftingDroneCraft,
    ultimateAdventure,
];

const blogPostsBySlug = Object.fromEntries(allPosts.map((post) => [post.slug, post]));

function normalizeSlug(value) {
    return decodeURIComponent(String(value ?? "").trim());
}

function getPostSlugs(post) {
    return [post.slug, post.urlSlug].filter(Boolean).map(normalizeSlug);
}

export function getBlogPost(paramSlug) {
    const normalized = normalizeSlug(paramSlug);
    return allPosts.find((post) => getPostSlugs(post).includes(normalized)) ?? null;
}

export function hasBlogPost(paramSlug) {
    return getBlogPost(paramSlug) !== null;
}

export function getBlogUrlSlug(postOrSlug) {
    if (typeof postOrSlug === "string") {
        const post = getBlogPost(postOrSlug);
        return post?.urlSlug ?? post?.slug ?? postOrSlug;
    }

    return postOrSlug.urlSlug ?? postOrSlug.slug;
}

export { blogPostsBySlug };
