import React, { useEffect, useRef, useState } from "react";

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const STRIP = [...DIGITS, ...DIGITS];
const CELL_PERCENT = 100 / STRIP.length;

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

function SlideDigit({ digit }) {
    const trackRef = useRef(null);
    const prevDigitRef = useRef(0);
    const [stripIndex, setStripIndex] = useState(0);

    useEffect(() => {
        const prev = prevDigitRef.current;
        let nextIndex = digit;

        if (digit < prev) {
            nextIndex = digit + 10;
        }

        setStripIndex(nextIndex);
        prevDigitRef.current = digit;

        if (nextIndex >= 10) {
            const timer = setTimeout(() => {
                const track = trackRef.current;
                if (!track) return;
                track.style.transition = "none";
                setStripIndex(digit);
                requestAnimationFrame(() => {
                    track.style.transition = "";
                });
            }, 520);

            return () => clearTimeout(timer);
        }

        return undefined;
    }, [digit]);

    return (
        <span className="HeroStatSlideDigit" aria-hidden="true">
            <span
                ref={trackRef}
                className="HeroStatSlideTrack"
                style={{ transform: `translateY(-${stripIndex * CELL_PERCENT}%)` }}
            >
                {STRIP.map((d, i) => (
                    <span key={i} className="HeroStatSlideNum">
                        {d}
                    </span>
                ))}
            </span>
        </span>
    );
}

export function HeroStatSlideCounter({ value, suffix = "", duration = 3600, className = "" }) {
    const wrapRef = useRef(null);
    const [start, setStart] = useState(false);
    const [current, setCurrent] = useState(0);

    const digitCount = String(value).length;

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStart(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!start) return;

        let frameId;
        const startTime = performance.now();

        const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            setCurrent(Math.floor(eased * value));

            if (progress < 1) {
                frameId = requestAnimationFrame(tick);
            } else {
                setCurrent(value);
            }
        };

        frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, [start, value, duration]);

    const reducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
        return (
            <span className={`HeroStatTitle HeroStatTitle--counter ${className}`.trim()}>
                {value}
                {suffix}
            </span>
        );
    }

    const displayDigits = String(current).split("").map(Number);

    return (
        <span
            ref={wrapRef}
            className={`HeroStatTitle HeroStatTitle--counter ${className}`.trim()}
            aria-label={`${value}${suffix}`}
            style={{ "--stat-digit-slots": digitCount }}
        >
            <span className="HeroStatSlideRow" aria-hidden="true">
                {displayDigits.map((digit, i) => (
                    <SlideDigit key={`col-${i}`} digit={digit} />
                ))}
                {suffix ? <span className="HeroStatSuffix">{suffix}</span> : null}
            </span>
        </span>
    );
}

export default HeroStatSlideCounter;
