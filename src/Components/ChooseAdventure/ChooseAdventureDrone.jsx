import React, { useEffect, useState } from "react";
import "./ChooseAdventureDrone.css";

const lerp = (start, end, t) => start + (end - start) * t;

export function useHeaderScrollProgress(headerRef) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        const update = () => {
            const rect = header.getBoundingClientRect();
            const viewH = window.innerHeight;
            const traveled = viewH * 0.85 - rect.top;
            const total = viewH * 0.55 + rect.height;
            const p = Math.min(1, Math.max(0, traveled / total));
            setProgress(p);
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);

        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [headerRef]);

    return progress;
}

const DRONE_FLEET = [
    { id: "a", className: "ChooseDroneUnit--tl", delay: "0s" },
    { id: "b", className: "ChooseDroneUnit--tr", delay: "-1.1s" },
    { id: "c", className: "ChooseDroneUnit--br", delay: "-2.2s" },
];

function MiniDroneSvg({ gradId }) {
    return (
        <svg
            className="ChooseDroneSvg"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse
                className="ChooseDroneSvgShadow"
                cx="100"
                cy="168"
                rx="40"
                ry="7"
                fill="rgba(12, 45, 74, 0.12)"
            />
            <g className="ChooseDroneSvgArms" stroke="#2a3544" strokeWidth="4" strokeLinecap="round">
                <line x1="100" y1="100" x2="48" y2="48" />
                <line x1="100" y1="100" x2="152" y2="48" />
                <line x1="100" y1="100" x2="48" y2="152" />
                <line x1="100" y1="100" x2="152" y2="152" />
            </g>
            <circle cx="48" cy="48" r="7" fill="#3d4d62" stroke="#1a2230" strokeWidth="1.5" />
            <circle cx="152" cy="48" r="7" fill="#3d4d62" stroke="#1a2230" strokeWidth="1.5" />
            <circle cx="48" cy="152" r="7" fill="#3d4d62" stroke="#1a2230" strokeWidth="1.5" />
            <circle cx="152" cy="152" r="7" fill="#3d4d62" stroke="#1a2230" strokeWidth="1.5" />
            <g className="ChooseDroneSvgProp ChooseDroneSvgProp--tl">
                <circle cx="48" cy="48" r="14" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <path d="M48 36 L48 60 M36 48 L60 48" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g className="ChooseDroneSvgProp ChooseDroneSvgProp--tr">
                <circle cx="152" cy="48" r="14" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <path d="M152 36 L152 60 M140 48 L164 48" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g className="ChooseDroneSvgProp ChooseDroneSvgProp--bl">
                <circle cx="48" cy="152" r="14" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <path d="M48 140 L48 164 M36 152 L60 152" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g className="ChooseDroneSvgProp ChooseDroneSvgProp--br">
                <circle cx="152" cy="152" r="14" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <path d="M152 140 L152 164 M140 152 L164 152" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
            </g>
            <rect x="72" y="90" width="56" height="20" rx="6" fill={`url(#${gradId})`} />
            <rect x="76" y="93" width="48" height="4" rx="2" fill="#FF6B00" opacity="0.9" />
            <circle cx="100" cy="116" r="5.5" fill="#4a5a6e" stroke="#1a2230" strokeWidth="1.5" />
            <circle cx="100" cy="116" r="2.5" fill="#252f3d" />
            <circle cx="100" cy="84" r="2.5" fill="#FF6B00" className="ChooseDroneSvgLedFront" />
            <defs>
                <linearGradient id={gradId} x1="72" y1="90" x2="72" y2="110" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4a5a6e" />
                    <stop offset="1" stopColor="#1a2230" />
                </linearGradient>
            </defs>
        </svg>
    );
}

const ChooseAdventureDrone = ({ progress }) => {
    const drift = lerp(0, 6, progress);

    return (
        <div className="ChooseHeaderDroneWrap" aria-hidden="true">
            {DRONE_FLEET.map((drone) => (
                <div
                    key={drone.id}
                    className={`ChooseDroneUnit ${drone.className}`}
                    style={{
                        "--drone-drift": `${drift}px`,
                        "--drone-delay": drone.delay,
                    }}
                >
                    <MiniDroneSvg gradId={`chooseDroneGrad-${drone.id}`} />
                </div>
            ))}
        </div>
    );
};

export default ChooseAdventureDrone;
