import React from "react";
import "./ChooseAdventure.css";
import Button from "../Button/Button";
import {
    IoTimeOutline,
    IoLocationOutline,
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
                            className={`ChooseCard${activity.highlighted ? " ChooseCard--highlight" : ""}`}
                        >
                            <div className="ChooseCardImageWrap">
                                <img
                                    className="ChooseCardImage"
                                    src={activity.image}
                                    alt={activity.title}
                                    loading="lazy"
                                />

                                <span className="ChooseCardDifficulty">
                                    <GiWaveSurfer size={12} />
                                    {activity.difficulty}
                                </span>

                                <span className="ChooseCardDuration">
                                    <IoTimeOutline size={12} />
                                    {activity.duration}
                                </span>

                                {activity.popular && (
                                    <span className="ChooseCardPopular">
                                        <IoStar size={11} />
                                        Most Popular
                                    </span>
                                )}

                                {activity.ribbon && (
                                    <span
                                        className={`ChooseCardRibbon ChooseCardRibbon--${activity.ribbon.variant}`}
                                    >
                                        {activity.ribbon.text}
                                    </span>
                                )}

                                <span className="ChooseCardRating">
                                    <IoStar size={10} />
                                    {activity.rating}
                                </span>
                            </div>

                            <div className="ChooseCardBody">
                                <h3 className="ChooseCardTitle">{activity.title}</h3>

                                {/* <p className="ChooseCardLocation">
                                    <IoLocationOutline size={12} aria-hidden="true" />
                                    {activity.location}
                                </p> */}

                                <p className="ChooseCardDesc">{activity.description}</p>

                                <div className="ChooseCardStats">
                                    <div className="ChooseCardStat">
                                        <TbRoute size={14} className="ChooseCardStatIcon" aria-hidden="true" />
                                        <span>
                                            <strong>{activity.distance}</strong>
                                            <small>Distance</small>
                                        </span>
                                    </div>
                                    <div className="ChooseCardStat">
                                        <IoTimeOutline size={14} className="ChooseCardStatIcon" aria-hidden="true" />
                                        <span>
                                            <strong>{activity.time}</strong>
                                            <small>Duration</small>
                                        </span>
                                    </div>
                                </div>

                                <div className="ChooseCardFooter">
                                    <div className="ChooseCardPriceWrap">
                                        <span className="ChooseCardPrice">₹{activity.price}</span>
                                        {/* <span className="ChooseCardVoucher">{activity.voucher}</span> */}
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
