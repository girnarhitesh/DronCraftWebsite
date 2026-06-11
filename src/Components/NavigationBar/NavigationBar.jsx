import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import Button from "../Button/Button";
import { IoArrowForward } from "react-icons/io5";
import { SCROLL_THRESHOLD } from "./navigationData";
import { Link, useLocation } from "react-router-dom";
const NavigationBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();
    const isHomePage = pathname === "/";
    const forceSolid = !isHomePage;

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY >= SCROLL_THRESHOLD);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`NavigationBar${scrolled || forceSolid ? " NavigationBar--scrolled" : ""}`}
            role="banner"
        >
            <div className="NavigationBarInner MaxWidthContainer MarginAuto">
                <Link to={isHomePage ? "/" : "/"} className="NavLogo" aria-label="DroneCraft home">
                    <img
                        className="NavLogoImg"
                        src="/Images/UpdatedDroneCraftLogo.png"
                        alt="DroneCraft — Rafting with Drone Video"
                    />
                </Link>

                {/* <nav className="NavMenu" aria-label="Main navigation">
                    <ul className="NavList">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    className={`NavLink${activeId === link.id ? " NavLink--active" : ""}`}
                                    onClick={() => handleNavClick(link.id)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav> */}

                <div className="NavActions">
                    {!isHomePage && (
                        <Link to="/" className="NavHomeBtn" aria-label="Go to home page">
                            Home
                        </Link>
                    )}
                    <Button
                        variant="primary"
                        className="NavBookBtn"
                        icon={<IoArrowForward size={16} />}
                    >
                        Book Now
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default NavigationBar;
