import React, { useState, useEffect } from "react";
import "./HeroIllustration.css";
import { TbDrone, TbKayak } from "react-icons/tb";
import { IoShirtOutline, IoCameraOutline } from "react-icons/io5";
import { HiOutlineShieldCheck } from "react-icons/hi2";

const features = [
    { id: "drone", icon: <TbDrone size={22} />, label: "Drone Reels", sub: "Cinematic aerial coverage included", variant: "navy" },
    { id: "kayak", icon: <TbKayak size={22} />, label: "Safety Kayak", sub: "Dedicated rescue support on every trip", variant: "orange" },
    { id: "wetsuit", icon: <IoShirtOutline size={22} />, label: "Premium Wetsuits", sub: "ISO-certified gear for your comfort", variant: "navy" },
    { id: "gopro", icon: <IoCameraOutline size={22} />, label: "GoPro Moments", sub: "Every thrill captured frame by frame", variant: "orange" },
    { id: "safety", icon: <HiOutlineShieldCheck size={22} />, label: "Certified Guides", sub: "Trained professionals on every route", variant: "navy" },
];

/* ── SVG Boat ── */
const RaftBoat = () => (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="HeroBoatSvg" aria-hidden="true">
        {/* water */}
        <ellipse cx="140" cy="138" rx="128" ry="16" fill="rgba(10,80,160,0.22)" />
        <path className="HIWave HIWave--a"
            d="M16 142 Q50 135 84 142 Q118 149 152 142 Q186 135 220 142 Q250 149 270 142"
            stroke="rgba(255,255,255,0.32)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path className="HIWave HIWave--b"
            d="M30 150 Q65 145 100 150 Q135 155 170 150 Q205 145 240 150"
            stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" fill="none" strokeLinecap="round" />

        {/* raft tubes */}
        <ellipse cx="140" cy="122" rx="80" ry="16" fill="#e85500" />
        <ellipse cx="140" cy="118" rx="80" ry="13" fill="#FF6B00" />
        <path d="M60 118 Q85 94 140 94 Q195 94 220 118" stroke="#e85500" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* floor */}
        <ellipse cx="140" cy="112" rx="62" ry="9" fill="#1a3d6e" />
        <ellipse cx="140" cy="109" rx="62" ry="5" fill="rgba(255,255,255,0.06)" />

        {/* paddlers */}
        {[100, 140, 180].map((x, i) => (
            <g key={i} className={`HIPaddler HIPaddler--${i}`}>
                <circle cx={x} cy="94" r="6.5" fill="#fff" opacity="0.92" />
                <line x1={x} y1="100" x2={x} y2="115" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
                {/* helmet */}
                <path d={`M${x - 7} 92 Q${x} 83 ${x + 7} 92`} fill={i === 1 ? "#1a4d8c" : "#FF6B00"} opacity="0.95" />
                {/* paddle */}
                <line
                    className={`HIPaddle HIPaddle--${i}`}
                    x1={x - 14} y1="89"
                    x2={x + 14} y2="106"
                    stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.8"
                />
                <ellipse
                    className={`HIPaddle HIPaddle--${i}`}
                    cx={x - 16} cy="87" rx="4.5" ry="2.5"
                    fill="#FF6B00" opacity="0.9" transform={`rotate(-30 ${x - 16} 87)`}
                />
            </g>
        ))}

        {/* splashes */}
        {[
            { cx: 58, cy: 126, r: 2.5, cls: "HISplash--0" },
            { cx: 222, cy: 126, r: 2.5, cls: "HISplash--1" },
            { cx: 118, cy: 130, r: 2, cls: "HISplash--2" },
            { cx: 162, cy: 131, r: 2, cls: "HISplash--3" },
        ].map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.r}
                fill="rgba(255,255,255,0.6)" className={`HISplash ${s.cls}`} />
        ))}

        {/* drone — props spin in motor-local coordinates */}
        <g className="HIDroneGroup">
            <g className="HIDroneBody">
                <rect x="127" y="28" width="26" height="9" rx="3.5" fill="#1a2d44" />
                <rect x="129" y="30" width="22" height="3" rx="1.5" fill="#FF6B00" opacity="0.9" />
                <line x1="140" y1="32" x2="118" y2="17" stroke="#2a3a4e" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="140" y1="32" x2="162" y2="17" stroke="#2a3a4e" strokeWidth="2.2" strokeLinecap="round" />
                <circle cx="140" cy="39" r="3.5" fill="#3d4d62" />
                <circle cx="140" cy="39" r="1.8" fill="#111" />
                <circle cx="140" cy="26" r="1.8" fill="#FF6B00" className="HIDroneLed" />
                <line x1="140" y1="42" x2="140" y2="88"
                    stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 4" />
            </g>

            <g className="HIMotor HIMotor--l" transform="translate(118 17)">
                <circle r="4.5" fill="#3d4d62" stroke="#1a2230" strokeWidth="1" />
                <g className="HIProp HIProp--l">
                    <ellipse rx="9" ry="2.2" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
                    <line x1="0" y1="-8" x2="0" y2="8" stroke="rgba(255,255,255,0.65)" strokeWidth="2" strokeLinecap="round" />
                    <line x1="-8" y1="0" x2="8" y2="0" stroke="rgba(255,255,255,0.65)" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>

            <g className="HIMotor HIMotor--r" transform="translate(162 17)">
                <circle r="4.5" fill="#3d4d62" stroke="#1a2230" strokeWidth="1" />
                <g className="HIProp HIProp--r">
                    <ellipse rx="9" ry="2.2" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
                    <line x1="0" y1="-8" x2="0" y2="8" stroke="rgba(255,255,255,0.65)" strokeWidth="2" strokeLinecap="round" />
                    <line x1="-8" y1="0" x2="8" y2="0" stroke="rgba(255,255,255,0.65)" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>
        </g>

        {/* rocks */}
        <ellipse cx="30" cy="134" rx="13" ry="6" fill="rgba(20,50,80,0.42)" />
        <ellipse cx="250" cy="136" rx="11" ry="5.5" fill="rgba(20,50,80,0.42)" />
    </svg>
);

const HeroIllustration = () => {
    const [active, setActive] = useState(0);
    const [leaving, setLeaving] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive(prev => {
                setLeaving(prev);
                setTimeout(() => setLeaving(null), 600);
                return (prev + 1) % features.length;
            });
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const cur = features[active];
    const prev = leaving !== null ? features[leaving] : null;

    return (
        <div className="HeroIll" aria-label="Rafting illustration with features">

            {/* ambient glow */}
            <div className="HIGlow" />

            {/* step dots */}
            <div className="HIStepDots">
                {features.map((_, i) => (
                    <button
                        key={i}
                        className={`HIStepDot${i === active ? " HIStepDot--active" : ""}`}
                        onClick={() => { setLeaving(active); setActive(i); }}
                        aria-label={features[i].label}
                    />
                ))}
            </div>

            {/* boat scene */}
            <div className="HIBoatWrap">
                <RaftBoat />
            </div>

            {/* cycling feature badge */}
            <div className="HIBadgeStage">
                {/* leaving */}
                {prev && (
                    <div key={`leave-${leaving}`} className={`HIBadge HIBadge--${prev.variant} HIBadge--leaving`}>
                        <div className={`HIBadgeIcon HIBadgeIcon--${prev.variant}`}>{prev.icon}</div>
                        <div className="HIBadgeBody">
                            <span className="HIBadgeLabel">{prev.label}</span>
                            <span className="HIBadgeSub">{prev.sub}</span>
                        </div>
                    </div>
                )}
                {/* entering */}
                <div key={`enter-${active}`} className={`HIBadge HIBadge--${cur.variant} HIBadge--entering`}>
                    <div className={`HIBadgeIcon HIBadgeIcon--${cur.variant}`}>{cur.icon}</div>
                    <div className="HIBadgeBody">
                        <span className="HIBadgeLabel">{cur.label}</span>
                        <span className="HIBadgeSub">{cur.sub}</span>
                    </div>
                </div>
            </div>

            {/* progress bar */}
            <div className="HIProgress">
                <div key={active} className="HIProgressBar" />
            </div>

        </div>
    );
};

export default HeroIllustration;
