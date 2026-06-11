import React from "react";
import "./WhyDroneCraft.css";
import { TbDrone, TbVideo } from "react-icons/tb";
import { HiOutlineShieldCheck, HiOutlineUserGroup } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { FaMountain } from "react-icons/fa6";

const cards = [
    {
        icon: <TbDrone size={28} />,
        title: "Drone Experts",
        desc: "Professional drone & DSLR experts capturing cinematic adventure moments with stunning aerial shots and fast 1–4 hour delivery.",
    },
    {
        icon: <HiOutlineShieldCheck size={28} />,
        title: "Safety First",
        desc: "Certified guides, premium safety equipment, and experienced professionals ensuring a secure rafting experience.",
    },
    {
        icon: <TbVideo size={28} />,
        title: "Instant Reels",
        desc: "Receive professionally edited reels and photos within 24 hours to relive your adventure instantly.",
    },
    {
        icon: <FaMountain size={26} />,
        title: "Fully Managed Experience",
        desc: "No upselling or guesswork — just the best activity slots, premium videos, perfect timing, water-entry moments, and a complete adventure experience.",
    },
    {
        icon: <IoShirtOutline size={28} />,
        title: "Premium Gear",
        desc: "Top-quality helmets, wetsuits, life jackets, and rafting equipment for maximum comfort and safety.",
    },
    {
        icon: <HiOutlineUserGroup size={28} />,
        title: "WRT & WFA certified team",
        desc: "Passionate adventure experts and videographers dedicated to making every moment unforgettable.",
    },
];

const WhyDroneCraft = () => {
    return (
        <section className="WhyDroneCraft SectionPad" id="about-us">
            <div className="WhyDroneCraftContent MaxWidthContainer MarginAuto">
                <div className="WhyGrid">
                    <div className="WhyLeft">
                        <div className="WhyEyebrow">
                            <span className="WhyEyebrowLine" aria-hidden="true" />
                            <span className="WhyEyebrowText">Why Choose DroneCraft?</span>
                        </div>

                        <div className="WhyHeadings">
                            <h2 className="WhyHeading">Adventure. Safety.</h2>
                            <h2 className="WhyHeading">
                                <span className="WhyHeadingAccent">Memories</span> That Last.
                            </h2>
                        </div>

                        <span className="WhyHeadingRule" aria-hidden="true" />

                        <div className="WhyCopy">
                            <p className="WhyParagraph">
                                At DroneCraft, we turn every rafting adventure into a cinematic story worth reliving.
                            </p>
                            <p className="WhyParagraph">
                                With expert drone pilots, premium safety standards, and breathtaking visuals, we capture every thrill from the best angles.
                            </p>
                            <p className="WhyParagraph">
                                From roaring rapids to unforgettable moments, we create memories that stay with you forever.
                            </p>
                        </div>
                        {/* <div>
                            <img src="/Images/DeviderLine.png" alt="Why DroneCraft" />
                        </div> */}
                       
                    </div>

                    <div className="WhyRight">
                        <div className="WhyCardsGrid">
                            {cards.map((card) => (
                                <article key={card.title} className="WhyCard">
                                    <div className="WhyCardIconWrap">{card.icon}</div>
                                    <span className="WhyCardAccent" aria-hidden="true" />
                                    <h3 className="WhyCardTitle">{card.title}</h3>
                                    <p className="WhyCardDesc">{card.desc}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyDroneCraft;
