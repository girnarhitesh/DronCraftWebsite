import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css";
import Button from "../../Button/Button";
import HeroStatsBar from "./HeroStatsBar";
import { IoArrowForward, IoPlay, IoPeopleOutline, IoHeadsetOutline } from "react-icons/io5";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { GiPaddleSteamer } from "react-icons/gi";

const HERO_VIDEO_SRC = "/Images/DroneCraftRaftingVideo.mp4";
const HERO_POSTER_SRC = "/Images/BackgroundImages/HeroBackgroundImage.png";

const trustTags = [
    { id: "guides", icon: <HiOutlineShieldCheck size={14} />, label: "Certified Guides" },
    { id: "group", icon: <IoPeopleOutline size={14} />, label: "Small Group Experience" },
    { id: "support", icon: <IoHeadsetOutline size={14} />, label: "24/7 Support" },
];

const HeroSection = () => {
    const videoRef = useRef(null);
    const [isVideoReady, setIsVideoReady] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return undefined;

        const markReady = () => setIsVideoReady(true);

        const tryPlay = () => {
            video.play().catch(() => {});
        };

        video.addEventListener("canplay", markReady);
        video.addEventListener("playing", markReady);
        video.addEventListener("canplay", tryPlay);

        if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
            markReady();
            tryPlay();
        }

        return () => {
            video.removeEventListener("canplay", markReady);
            video.removeEventListener("playing", markReady);
            video.removeEventListener("canplay", tryPlay);
        };
    }, []);

    return (
        <section id="HeroSection" className="HeroSection">
            <div className={`HeroMedia ${isVideoReady ? "HeroMedia--loaded" : ""}`}>
                <img
                    className="HeroMediaPoster"
                    src={HERO_POSTER_SRC}
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    decoding="async"
                />
                <video
                    ref={videoRef}
                    className={`HeroMediaVideo ${isVideoReady ? "HeroMediaVideo--loaded" : ""}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={HERO_POSTER_SRC}
                    aria-hidden="true"
                >
                    <source src={HERO_VIDEO_SRC} type="video/mp4" />
                </video>
                <div className="HeroMediaOverlay" aria-hidden="true" />
            </div>

            <div className="HeroContent">
                <div className="HeroShell MaxWidthContainer MarginAuto">
                    <div className="HeroLeft">
                        <div className="HeroBadge">
                            <span className="HeroBadgeIcon" aria-hidden="true">
                                <GiPaddleSteamer size={14} />
                            </span>
                            <span className="HeroBadgeText">Rishikesh's Premium Rafting</span>
                        </div>

                        <div className="HeroHeadings">
                            <h1 className="HeroHeadingWhite">Feel the Rush.</h1>
                            <div className="HeroHeadingOrangeBlock">
                                <span className="HeroHeadingAccent" aria-hidden="true" />
                                <h1 className="HeroHeadingOrange">Live the River.</h1>
                            </div>
                        </div>
                        <p className="HeroSubtitle">
                            Premium rafting experiences with drone reels, safety kayak,
                            wetsuits &amp; unforgettable memories.
                        </p>

                        {/* <div className="HeroButtons">
                            <Button variant="primary" icon={<IoArrowForward size={18} />}>
                                Book Your Adventure
                            </Button>
                            <Button variant="secondary" icon={<IoPlay size={15} />}>
                                Watch Drone Reel
                            </Button>
                        </div> */}

                        <ul className="HeroTrustTags">
                            {trustTags.map((tag) => (
                                <li key={tag.id} className="HeroTrustTag">
                                    <span className="HeroTrustTagIcon" aria-hidden="true">
                                        {tag.icon}
                                    </span>
                                    {tag.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <HeroStatsBar />
        </section>
    );
};

export default HeroSection;
