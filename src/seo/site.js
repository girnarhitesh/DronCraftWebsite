export const SITE_ORIGIN = "https://www.dronecraft.co.in";
export const SITE_NAME = "Drone Craft";
export const BUSINESS_ID = `${SITE_ORIGIN}/#business`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
export const CONTENT_UPDATED = "2026-11-20";
export const POLICY_UPDATED = "2026-05-28";

export const BUSINESS = {
    name: SITE_NAME,
    legalName: "SkySnatch Drones LLP",
    email: "info@dronecraft.co.in",
    telephone: "+919997501427",
    priceRange: "₹1,290–₹2,490",
    logo: `${SITE_ORIGIN}/Images/UpdatedDroneCraftLogo.png`,
    image: `${SITE_ORIGIN}/Images/BackgroundImages/HeroBackgroundImage.png`,
    sameAs: [
        "https://www.facebook.com/dronecraft.rishikesh/",
        "https://www.instagram.com/dronecraft.rishikesh/",
    ],
    address: {
        streetAddress: "DroneCraft Lounge, Badrinath Rd, near Thrill Cafe, Tapovan",
        addressLocality: "Rishikesh",
        addressRegion: "Uttarakhand",
        postalCode: "249137",
        addressCountry: "IN",
    },
};

export const RAFTING_OFFERS = [
    {
        name: "12 KM River Rafting in Rishikesh",
        description:
            "Beginner-friendly Ganga river rafting from Brahmpuri to Neem Beach, with gentler rapids, safety gear, and drone video.",
        price: "1290",
        image: "/Images/ActivitiesImages/BrahmpuriNeemBeachRaftingImage.png",
    },
    {
        name: "16 KM River Rafting in Rishikesh",
        description:
            "The most popular Rishikesh rafting stretch with DroneCraft, from Shivpuri to Neem Beach, with thrilling waves and scenic Ganga views.",
        price: "1590",
        image: "/Images/ActivitiesImages/ShivpuriNeemBeachRaftingImage.png",
    },
    {
        name: "26 KM River Rafting in Rishikesh",
        description:
            "Extended white-water rafting from Marine Drive to Neem Beach, with longer time on the river and more challenging rapids.",
        price: "2490",
        image: "/Images/ActivitiesImages/MarineDriveNeemBeachRaftingImage.png",
    },
];

export function toAbsoluteUrl(path) {
    if (!path) return BUSINESS.logo;
    if (path.startsWith("http://") || path.startsWith("https://")) return path;

    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${SITE_ORIGIN}${encodeURI(decodeURI(normalized))}`;
}

export function toPublicUrl(pathname) {
    const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
    return `${SITE_ORIGIN}${encodeURI(decodeURI(path))}`;
}
