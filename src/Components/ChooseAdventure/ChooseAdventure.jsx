import React from "react";
import "./ChooseAdventure.css";
import Button from "../Button/Button";
import {
    IoTimeOutline,
    IoStar,
    IoArrowForward,
    IoPricetagOutline,
    IoCameraOutline,
    IoBusOutline,
    IoShirtOutline,
    IoFastFoodOutline,
    IoGlassesOutline,
} from "react-icons/io5";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { GiLifeJacket, GiWaveSurfer, GiHelmet } from "react-icons/gi";
import { FaMountain } from "react-icons/fa6";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { TbRoute, TbDrone } from "react-icons/tb";
import {
    activities,
    sectionHeader,
    headerFeatures,
    inclusions,
} from "./chooseAdventureData";

const headerFeatureIcons = {
    guides: <HiOutlineShieldCheck size={18} />,
    safety: <GiLifeJacket size={18} />,
    experience: <MdOutlineWorkspacePremium size={18} />,
    price: <IoPricetagOutline size={18} />,
};

const inclusionIcons = {
    gear: <GiHelmet size={20} />,
    photos: <IoCameraOutline size={20} />,
    transport: <IoBusOutline size={20} />,
    refreshments: <IoFastFoodOutline size={20} />,
    goggles: <IoGlassesOutline size={20} />,
    wetsuits: <IoShirtOutline size={20} />,
    droneVideo: <TbDrone size={20} />,
};

const factIcons = {
    route: <TbRoute size={13} />,
    time: <IoTimeOutline size={13} />,
    rapids: <GiWaveSurfer size={13} />,
};

function CardWave() {
    return (
        <svg
            className="ChooseCardWave"
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <path
                fill="#ffffff"
                d="M0 28C120 48 240 8 360 28C480 48 600 8 720 28C840 48 960 8 1080 28C1200 48 1320 8 1440 28V48H0Z"
            />
        </svg>
    );
}

const ChooseAdventure = () => {
    return (
        <section className="ChooseAdventure SectionPad" id="activities">
            <div className="ChooseAdventureBg" aria-hidden="true">
                <img
                    className="ChooseAdventureBgImg"
                    src="/Images/BackgroundImages/AdventureCardsBackground.png"
                    alt=""
                />
                <div className="ChooseAdventureBgFade" />
            </div>

            <div className="ChooseAdventureContent MaxWidthContainer MarginAuto">
                <header className="ChooseHeader">
                    {/* <div className="ChooseEyebrow">
                        <FaMountain className="ChooseEyebrowIcon" aria-hidden="true" />
                        <span className="ChooseEyebrowText">{sectionHeader.eyebrow}</span>
                        <span className="ChooseEyebrowLine" aria-hidden="true" />
                    </div> */}

                    <h2 className="ChooseHeading">
                        <span className="ChooseHeadingNavy">{sectionHeader.titleStart} </span>
                        <span className="ChooseHeadingOrange">{sectionHeader.titleEnd}</span>
                    </h2>

                    <p className="ChooseSubtitle">{sectionHeader.subtitle}</p>

                    {/* <ul className="ChooseFeatures">
                        {headerFeatures.map((feature) => (
                            <li key={feature.id} className="ChooseFeature">
                                <span className="ChooseFeatureIcon" aria-hidden="true">
                                    {headerFeatureIcons[feature.id]}
                                </span>
                                <span className="ChooseFeatureText">
                                    <strong>{feature.title}</strong>
                                    <span>{feature.sub}</span>
                                </span>
                            </li>
                        ))}
                    </ul> */}
                </header>

                <div className="ChooseGrid">
                    {activities.map((activity) => (
                        <article
                            key={activity.id}
                            className={`ChooseCard ChooseCard--${activity.tone}${activity.highlighted ? " ChooseCard--highlight" : ""}`}
                        >
                            <div className="ChooseCardImageWrap">
                                <img
                                    className="ChooseCardImage"
                                    src={activity.image}
                                    alt={activity.title}
                                    loading="lazy"
                                />

                                <span className={`ChooseCardFlag ChooseCardFlag--${activity.tone}`}>
                                    {activity.highlighted && <IoStar size={10} aria-hidden="true" />}
                                    {activity.flag}
                                </span>

                                <span className="ChooseCardRating">
                                    <IoStar size={10} aria-hidden="true" />
                                    {activity.rating}
                                </span>

                                <CardWave />
                            </div>

                            <div className="ChooseCardBody">
                                <h3 className="ChooseCardTitle">
                                    <span className="ChooseCardTitleKm">{activity.km} KM</span>
                                    {" "}River Rafting
                                    <span className="ChooseCardTitlePlace">in Rishikesh</span>
                                </h3>

                                <p className="ChooseCardDesc">{activity.description}</p>

                                <ul className="ChooseCardFacts">
                                    {activity.facts.map((fact) => (
                                        <li key={fact.id} className="ChooseCardFact">
                                            <span className="ChooseCardFactIcon" aria-hidden="true">
                                                {factIcons[fact.icon]}
                                            </span>
                                            <strong>{fact.value}</strong>
                                            <small>{fact.label}</small>
                                        </li>
                                    ))}
                                </ul>

                                <div className="ChooseRapids">
                                    <p className="ChooseRapidsLabel">{activity.rapidsLabel}</p>
                                    <ul className="ChooseRapidsList">
                                        {activity.rapids.map((rapid) => (
                                            <li key={rapid.name} className="ChooseRapid">
                                                {rapid.name}
                                                {rapid.grade && (
                                                    <span className="ChooseRapidGrade">{rapid.grade}</span>
                                                )}
                                                {rapid.tag && (
                                                    <span className="ChooseRapidTag">{rapid.tag}</span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                    {activity.rapidsNote && (
                                        <p className="ChooseRapidsNote">{activity.rapidsNote}</p>
                                    )}
                                </div>

                                <p className="ChooseCardBest">
                                    <span className="ChooseCardBestLabel">Best for</span>
                                    <span className="ChooseCardBestText">{activity.bestFor}</span>
                                </p>

                                <div className="ChooseCardFooter">
                                    <div className="ChooseCardPriceWrap">
                                        <span className="ChooseCardPrice">₹{activity.price}</span>
                                    </div>

                                    <Button
                                        variant="outlineOrange"
                                        className="ChooseCardViewBtn"
                                        bookingTitle={activity.title}
                                        icon={<IoArrowForward size={14} />}
                                    >
                                        {activity.ctaLabel}
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="ChooseInclusions">
                    {inclusions.map((item) => (
                        <div key={item.id} className="ChooseInclusion">
                            <span className="ChooseInclusionIcon" aria-hidden="true">
                                {inclusionIcons[item.id]}
                            </span>
                            <span className="ChooseInclusionText">
                                <strong>{item.title}</strong>
                                <span>{item.sub}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChooseAdventure;
