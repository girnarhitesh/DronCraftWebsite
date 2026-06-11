import { CONTACT_PHONE } from "../../constants/contact";

export const brand = {
    logo: "/Images/UpdatedDroneCraftLogo.png",
    logoAlt: "DroneCraft — Rafting with Drone Video",
    description:
        "Welcome to Drone Craft, where every adventure deserves to be seen from the most breathtaking perspectives. We specialize in high-quality drone and DSLR videography, capturing your most exhilarating moments with precision.",
};

export const features = [
    {
        id: "safety",
        title: "Safety First",
        subtitle: "Your safety is our priority.",
    },
    {
        id: "quality",
        title: "Best Quality",
        subtitle: "Premium drone & DSLR footage.",
    },
    {
        id: "team",
        title: "Expert Team",
        subtitle: "Experienced pilots & guides.",
    },
];

export const policies = {
    heading: "Our Policy",
    links: [
        {
            id: "privacy",
            label: "Privacy Policy",
            href: "/privacy-policy",
        },
        {
            id: "terms",
            label: "Terms And Condition",
            href: "/terms-and-condition",
        },
        {
            id: "refund",
            label: "Return & Refund",
            href: "/return-refund",
        },
        {
            id: "blog",
            label: "Blogs",
            href: "/blogs",
        },
    ],
};

export const contact = {
    heading: "Contact Us",
    items: [
        {
            id: "address",
            label: "DroneCraft Lounge, Badrinath Rd, near Thrill Cafe, Tapovan, Rishikesh, Uttarakhand 249137",
            href: "https://maps.google.com/?q=DroneCraft+Lounge+Tapovan+Rishikesh",
        },
        {
            id: "phone",
            label: CONTACT_PHONE.display,
            href: `tel:${CONTACT_PHONE.e164}`,
        },
        {
            id: "email",
            label: "info@dronecraft.co.in",
            href: "mailto:info@dronecraft.co.in",
        },
    ],
};

export const bottomBar = {
    copyright: "© 2026 Drone Craft. All rights reserved.",
    slogan: {
        beforeAdventures: "Capturing ",
        adventures: "Adventures",
        middle: ". Creating ",
        memories: "Memories",
        after: ".",
    },
    social: [
        {
            id: "facebook",
            label: "Facebook",
            href: "https://www.facebook.com/dronecraft.rishikesh/",
        },
        {
            id: "instagram",
            label: "Instagram",
            href: "https://www.instagram.com/dronecraft.rishikesh/",
        },
    ],
};
