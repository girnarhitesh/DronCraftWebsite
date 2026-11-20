import { getBlogUrlSlug } from "./blogPosts/index.js";

export const blogsHeader = {
    eyebrow: "Insights",
    title: "Our Blog",
    subtitle: "Tips, guides, and stories from the rapids of Rishikesh.",
};

export const blogsPageMeta = {
    metaTitle: "Blog | Drone Craft",
    metaDescription:
        "Read DroneCraft blogs on rafting in Rishikesh — beginner guides, pricing, safety tips, and adventure stories from the Ganga.",
    metaKeywords:
        "rafting blog Rishikesh, DroneCraft blog, river rafting guides, Rishikesh adventure blog, rafting tips Rishikesh",
};

export const blogs = [
    {
        id: "drone-rafting-video-vs-gopro",
        slug: "drone-rafting-video-vs-gopro-rishikesh",
        title: "Why a Drone Rafting Video Beats Any GoPro Clip in Rishikesh",
        image: "/Images/OurBlogImages/drone-rafting-video-vs-gopro-rishikesh.png",
    },
    {
        id: "aerial-rafting-videos",
        slug: "aerial-rafting-videos-in-rishikesh",
        title: "Aerial Rafting Videos in Rishikesh: A New Way to Relive the Ganga",
        image: "/Images/OurBlogImages/aerial-rafting-videos-in-rishikesh.png",
    },
    {
        id: "complete-guide-first-timers",
        slug: "a-complete-guide-to-rafting-in-rishikesh-for-first-timers",
        title: "A Complete Guide to Rafting in Rishikesh for First-Timers",
        image: "/Images/OurBlogImages/A-Complete-Guide-to-Rafting-in-Rishikesh%20(1).png",
    },
    {
        id: "rafting-cost-guide",
        slug: "how-much-does-rishikesh-rafting-cost-your-ultimate-guide-to-pricing",
        title: "How Much Does Rishikesh Rafting Cost? Your Ultimate Guide To Pricing",
        image: "/Images/OurBlogImages/how-much-does-river-rafting-cost%20(1).png",
    },
    {
        id: "white-water-dronecraft",
        slug: "white-water-rafting-in-rishikesh",
        urlSlug: "White-Water-Rafting in-rishikesh",
        title: "White Water Rafting in Rishikesh: Why DroneCraft Makes It an Experience You'll Never Forget",
        image: "/Images/OurBlogImages/white-water-rafting-in-rishikesh.webp",
    },
    {
        id: "ultimate-adventure",
        slug: "why-rafting-in-rishikesh-is-the-ultimate-adventure",
        title: "Why Rafting in Rishikesh is the Ultimate Adventure",
        image: "/Images/OurBlogImages/Why%20Rafting%20in%20Rishikesh%20is%20the%20Ultimate%20Adventure%20%20%20(1).png",
    },
];

export function getBlogPath(slug) {
    return `/blogs/news/${getBlogUrlSlug(slug)}`;
}
