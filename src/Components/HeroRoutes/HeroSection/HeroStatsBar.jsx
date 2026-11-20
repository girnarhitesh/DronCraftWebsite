import React from "react";
import "./HeroStatsBar.css";
import HeroStatSlideCounter from "./HeroStatSlideCounter";
import { HiOutlineUserCircle, HiOutlineShieldCheck } from "react-icons/hi2";
import { TbDrone, TbKayak } from "react-icons/tb";
import { IoCameraOutline } from "react-icons/io5";

const iconSize = 22;

const stats = [
    {
        icon: <HiOutlineUserCircle size={iconSize} />,
        count: 25000,
        suffix: "+",
        sub: "Happy Guests",
    },
    {
        icon: <HiOutlineShieldCheck size={iconSize} />,
        title: "WRA Certified",
        sub: "River Guides",
    },
    {
        icon: <TbKayak size={iconSize} />,
        title: "Safety Kayak",
        sub: "In Every Ride",
    },
    {
        icon: <TbDrone size={iconSize} />,
        title: "Drone Reel",
        sub: "Included",
    },
    {
        icon: <IoCameraOutline size={iconSize} />,
        title: "DSLR Photos",
        sub: "Included",
    },
];

const HeroStatsBar = () => {
    return (
        <div className="HeroStatsBar">
            <div className="HeroStatsBarInner MaxWidthContainer MarginAuto">
                {stats.map((item, i) => (
                    <div key={i} className="HeroStatItem">
                        <span className="HeroStatIcon" aria-hidden="true">
                            {item.icon}
                        </span>
                        <div className="HeroStatText">
                            {typeof item.count === "number" ? (
                                <HeroStatSlideCounter
                                    value={item.count}
                                    suffix={item.suffix ?? ""}
                                    duration={item.count >= 1000 ? 4200 : 2600}
                                />
                            ) : (
                                <span className="HeroStatTitle">{item.title}</span>
                            )}
                            <span className="HeroStatSub">{item.sub}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroStatsBar;
