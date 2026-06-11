import React from "react";
import "./OurPromise.css";
import { HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import {
    IoShieldCheckmarkOutline,
    IoSearchOutline,
    IoPeopleOutline,
    IoBoatOutline,
    IoVideocamOutline,
    IoAlertCircleOutline,
    IoCalendarOutline,
    IoCafeOutline,
    IoCarOutline,
    IoShirtOutline,
    IoSnowOutline,
    IoChatbubbleEllipsesOutline,
    IoFilmOutline,
    IoPhonePortraitOutline,
    IoHeartOutline,
    IoGiftOutline,
    IoRestaurantOutline,
    IoLayersOutline,
    IoCutOutline,
    IoDownloadOutline,
} from "react-icons/io5";
import { TbDrone } from "react-icons/tb";
import { FaCamera } from "react-icons/fa6";

/* ─── Brush-edge image style with subtle distortion (keeps old look, clearer image) ─── */
const BrushImage = ({ src, alt, filterId }) => (
    <svg
        className="OPBrushImage"
        viewBox="0 0 400 220"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={alt}
        role="img"
        preserveAspectRatio="xMidYMid meet"
    >
        <defs>
            <filter
                id={filterId}
                x="-3%"
                y="-3%"
                width="106%"
                height="106%"
                colorInterpolationFilters="sRGB"
            >
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.018 0.022"
                    numOctaves="2"
                    seed="7"
                    stitchTiles="stitch"
                    result="noise"
                />
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="7"
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
            </filter>
        </defs>
        <image
            href={src}
            x="0"
            y="0"
            width="400"
            height="220"
            preserveAspectRatio="xMidYMid slice"
            filter={`url(#${filterId})`}
        />
    </svg>
);

const pillars = [
    {
        id: "safety",
        icon: <HiOutlineShieldCheck size={30} />,
        iconVariant: "orange",
        step: "01",
        stepVariant: "orange",
        title: "Safety",
        titleVariant: "orange",
        subtitle: "Engineered for Safety",
        subtitleVariant: "orange",
        desc: "Surrounded by towering mountains, lush forests, and rushing rivers, Drone Craft brings you thrilling adventures with complete peace of mind. We believe every rafting journey should be exciting, secure, and unforgettable. From expert supervision to advanced safety measures, every experience is carefully designed to keep you protected while you enjoy every moment of the adventure.",
        image: "/Images/whyChooseImages/EngineeredforSafety.webp",
        items: [
            {
                icon: <IoShieldCheckmarkOutline size={16} />,
                label: "Premium Safety Gear",
                desc: "ISO-certified equipment for maximum safety and comfort.",
                variant: "navy",
            },
            {
                icon: <IoSearchOutline size={16} />,
                label: "Routine Inspection",
                desc: "Regular checks of rafts, kayaks, and all safety equipment.",
                variant: "orange",
            },
            {
                icon: <IoPeopleOutline size={16} />,
                label: "Certified Guides",
                desc: "Skilled and experienced rafting professionals on every trip.",
                variant: "navy",
            },
            {
                icon: <IoBoatOutline size={16} />,
                label: "Rescue Kayaks",
                desc: "Dedicated safety kayaks always ready for emergency support.",
                variant: "orange",
            },
            {
                icon: <IoVideocamOutline size={16} />,
                label: "Safety Briefing",
                desc: "Detailed pre-rafting instructions with live guidance.",
                variant: "navy",
            },
            {
                icon: <IoAlertCircleOutline size={16} />,
                label: "Emergency Preparedness",
                desc: "Trained staff equipped for quick response in critical situations.",
                variant: "orange",
            },
            {
                icon: <TbDrone size={16} />,
                label: "Drone Surveillance",
                desc: "Aerial monitoring for added safety and smooth coordination.",
                variant: "navy",
            },
        ],
    },
    {
        id: "experience",
        icon: <HiOutlineUserGroup size={30} />,
        iconVariant: "navy",
        step: "02",
        stepVariant: "navy",
        title: "Experience",
        titleVariant: "navy",
        subtitle: "Designed for Experience",
        subtitleVariant: "navy",
        desc: "At Drone Craft, every detail is thoughtfully designed to make your adventure smooth, comfortable, and unforgettable. From seamless bookings to premium facilities, we combine thrill with convenience to give you an experience that feels effortless from start to finish.",
        image: "/Images/whyChooseImages/DesignedforExperience.jpg",
        items: [
            {
                icon: <IoCalendarOutline size={16} />,
                label: "Easy Booking & Pricing",
                desc: "Simple online booking with transparent pricing.",
                variant: "navy",
            },
            {
                icon: <IoCafeOutline size={16} />,
                label: "Reception & Lounge",
                desc: "Comfortable spaces to relax before and after your trip.",
                variant: "orange",
            },
            {
                icon: <HiOutlineClipboardDocumentCheck size={16} />,
                label: "Changing Rooms & Lockers",
                desc: "Clean facilities with secure storage for your belongings.",
                variant: "navy",
            },
            {
                icon: <IoCarOutline size={16} />,
                label: "Rafting Transfers",
                desc: "Timely shuttle service to the rafting starting point.",
                variant: "orange",
            },
            {
                icon: <IoShirtOutline size={16} />,
                label: "Complete Rafting Kit",
                desc: "All essential safety and adventure gear included.",
                variant: "navy",
            },
            {
                icon: <IoLayersOutline size={16} />,
                label: "Flexible Packages",
                desc: "Multiple rafting durations based on your comfort and thrill level.",
                variant: "orange",
            },
            {
                icon: <IoSnowOutline size={16} />,
                label: "Winter Protection",
                desc: "Specialized suits and equipment for colder weather conditions.",
                variant: "navy",
            },
            {
                icon: <IoChatbubbleEllipsesOutline size={16} />,
                label: "Feedback Support",
                desc: "Your suggestions help us improve every experience.",
                variant: "orange",
            },
            {
                icon: <IoRestaurantOutline size={16} />,
                label: "Post-Rafting Refreshments",
                desc: "Relaxation zones and refreshment options after the ride.",
                variant: "navy",
            },
            {
                icon: <IoGiftOutline size={16} />,
                label: "Exclusive Merchandise",
                desc: "Take home memorable Drone Craft collectibles and souvenirs.",
                variant: "orange",
            },
        ],
    },
    {
        id: "memory",
        icon: <FaCamera size={26} />,
        iconVariant: "orange",
        step: "03",
        stepVariant: "orange",
        title: "Memory",
        titleVariant: "orange",
        subtitle: "Delivered as Memory",
        subtitleVariant: "orange",
        desc: "At Drone Craft, we don't just capture your adventure — we turn it into a story worth reliving. From cinematic drone shots to social-ready edits, every moment is crafted to preserve the thrill, emotions, and excitement of your rafting experience forever.",
        image: "/Images/whyChooseImages/DeliveredasMemory.webp",
        items: [
            {
                icon: <IoFilmOutline size={16} />,
                label: "Cinematic Adventure Films",
                desc: "Movie-style edits with stunning aerial storytelling.",
                variant: "orange",
            },
            {
                icon: <IoPhonePortraitOutline size={16} />,
                label: "Social-Ready Reels",
                desc: "Short, engaging videos perfect for Instagram and social media.",
                variant: "navy",
            },
            {
                icon: <TbDrone size={16} />,
                label: "Drone Coverage",
                desc: "Every thrilling angle captured with dynamic drone visuals.",
                variant: "orange",
            },
            {
                icon: <IoCutOutline size={16} />,
                label: "Professional Editing",
                desc: "Smooth, high-quality edits that bring your adventure to life.",
                variant: "navy",
            },
            {
                icon: <IoHeartOutline size={16} />,
                label: "Unforgettable Moments",
                desc: "Memories designed to stay with you long after the ride ends.",
                variant: "orange",
            },
            {
                icon: <IoDownloadOutline size={16} />,
                label: "Take It Home",
                desc: "Download and share your adventure anytime, anywhere.",
                variant: "navy",
            },
        ],
    },
];

const OurPromise = () => {
    return (
        <section className="OurPromise SectionPad">
            <div className="OurPromiseContent MaxWidthContainer MarginAuto">

                {/* ── Section header ── */}
                <div className="OPSectionHeader">
                    <div className="OPEyebrow">
                        <span className="OPEyebrowDash" aria-hidden="true" />
                        <span className="OPEyebrowText">Our Vision and Aim</span>
                        <span className="OPEyebrowDash" aria-hidden="true" />
                    </div>
                    <h2 className="OPHeading">
                        <span className="OPHeadingNavy">Our Promise. </span>
                        <span className="OPHeadingOrange">Your Adventure.</span>
                    </h2>
                    {/* <p className="OPSubtitle">
                        At Drone Craft, we combine safety, experience and storytelling<br />
                        to create memories that stay with you forever.
                    </p>
                    <img
                        className="OPDivider"
                        src="/Images/DeviderLine.png"
                        alt=""
                        aria-hidden="true"
                    /> */}
                </div>

                {/* ── Timeline + 3 containers ── */}
                <div className="OPPillars">
                    <div className="OPConnectorLine" aria-hidden="true" />

                    <div className="OPGrid">
                        {pillars.map((pillar) => (
                            <div key={pillar.id} className="OPPillar">

                                {/* Icon + step badge */}
                                <div className="OPPillarTop">
                                    <div className={`OPPillarIcon OPPillarIcon--${pillar.iconVariant}`}>
                                        {pillar.icon}
                                    </div>
                                    <div className={`OPPillarStep OPPillarStep--${pillar.stepVariant}`}>
                                        {pillar.step}
                                    </div>
                                </div>

                                {/* Brush stroke title */}
                                <div className={`OPPillarTitle OPPillarTitle--${pillar.titleVariant}`}>
                                    <span className="OPPillarTitleBrush" aria-hidden="true" />
                                    <span className="OPPillarTitleText">{pillar.title}</span>
                                </div>

                                {/* Subtitle */}
                                <p className={`OPPillarSubtitle OPPillarSubtitle--${pillar.subtitleVariant}`}>
                                    {pillar.subtitle}
                                </p>

                                {/* Description */}
                                <p className="OPPillarDesc">{pillar.desc}</p>

                                {/* Feature list */}
                                <ul className="OPItemList">
                                    {pillar.items.map((item, idx) => (
                                        <li key={idx} className="OPItem">
                                            <span className={`OPItemIcon OPItemIcon--${item.variant}`} aria-hidden="true">
                                                {item.icon}
                                            </span>
                                            <div className="OPItemText">
                                                <span className="OPItemLabel">{item.label}</span>
                                                {item.desc && (
                                                    <span className="OPItemDesc">{item.desc}</span>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                {/* Bottom image — brush stroke / watercolor edge via SVG filter */}
                                <div className="OPPillarImage">
                                    <BrushImage
                                        src={pillar.image}
                                        alt={pillar.title}
                                        filterId={`op-brush-${pillar.id}`}
                                    />
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurPromise;
