import React from "react";
import {
    HiOutlineShieldCheck,
    HiOutlineUserGroup,
    HiOutlineLockClosed,
    HiOutlineDocumentText,
    HiOutlineNewspaper,
} from "react-icons/hi2";
import {
    IoCameraOutline,
    IoLocationOutline,
    IoCallOutline,
    IoMailOutline,
    IoChevronForward,
    IoRefreshOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { brand, features, policies, contact, bottomBar } from "./footerData";
import "./Footer.css";

const featureIcons = {
    safety: HiOutlineShieldCheck,
    quality: IoCameraOutline,
    team: HiOutlineUserGroup,
};

const policyIcons = {
    privacy: HiOutlineLockClosed,
    terms: HiOutlineDocumentText,
    refund: IoRefreshOutline,
    blog: HiOutlineNewspaper,
};

const contactIcons = {
    address: IoLocationOutline,
    phone: IoCallOutline,
    email: IoMailOutline,
};

const socialIcons = {
    facebook: FaFacebookF,
    instagram: FaInstagram,
};

function FooterHeading({ children }) {
    return (
        <h3 className="FooterColHeading">
            {children}
            <span className="FooterColHeadingLine" aria-hidden="true" />
        </h3>
    );
}

const Footer = () => {
    const { slogan } = bottomBar;

    return (
        <footer className="SiteFooter" role="contentinfo">
            <div className="SiteFooterMain">
                <div className="SiteFooterMainInner MaxWidthContainer MarginAuto">
                    <div className="SiteFooterCol SiteFooterCol--brand">
                        <Link to="/" className="FooterLogoLink" aria-label="DroneCraft home">
                            <img className="FooterLogo" src={brand.logo} alt={brand.logoAlt} />
                        </Link>
                        <p className="FooterBrandDesc">{brand.description}</p>
                        {/* <ul className="FooterFeatures">
                            {features.map((item) => {
                                const Icon = featureIcons[item.id];
                                return (
                                    <li key={item.id} className="FooterFeatureItem">
                                        <span className="FooterFeatureIcon" aria-hidden="true">
                                            <Icon size={26} />
                                        </span>
                                        <span className="FooterFeatureText">
                                            <strong>{item.title}</strong>
                                            <span>{item.subtitle}</span>
                                        </span>
                                    </li>
                                );
                            })}
                        </ul> */}
                    </div>

                    <div className="SiteFooterCol SiteFooterCol--policy">
                        <FooterHeading>{policies.heading}</FooterHeading>
                        <ul className="FooterPolicyList">
                            {policies.links.map((link) => {
                                const Icon = policyIcons[link.id];
                                const isInternalRoute = link.href.startsWith("/");
                                return (
                                    <li key={link.id}>
                                        {isInternalRoute ? (
                                            <Link to={link.href} className="FooterPolicyLink">
                                                <span className="FooterPolicyIcon" aria-hidden="true">
                                                    <Icon size={22} />
                                                </span>
                                                <span className="FooterPolicyLabel">{link.label}</span>
                                                <IoChevronForward
                                                    className="FooterPolicyArrow"
                                                    size={16}
                                                    aria-hidden="true"
                                                />
                                            </Link>
                                        ) : (
                                            <a href={link.href} className="FooterPolicyLink">
                                                <span className="FooterPolicyIcon" aria-hidden="true">
                                                    <Icon size={22} />
                                                </span>
                                                <span className="FooterPolicyLabel">{link.label}</span>
                                                <IoChevronForward
                                                    className="FooterPolicyArrow"
                                                    size={16}
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="SiteFooterCol SiteFooterCol--contact">
                        <FooterHeading>{contact.heading}</FooterHeading>
                        <ul className="FooterContactList">
                            {contact.items.map((item) => {
                                const Icon = contactIcons[item.id];
                                return (
                                    <li key={item.id} className="FooterContactItem">
                                        <span className="FooterContactIcon" aria-hidden="true">
                                            <Icon size={22} />
                                        </span>
                                        <a
                                            href={item.href}
                                            className="FooterContactLink"
                                            {...(item.id === "address"
                                                ? { target: "_blank", rel: "noopener noreferrer" }
                                                : {})}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="SiteFooterBottom">
                <div className="SiteFooterBottomInner MaxWidthContainer MarginAuto">
                    <p className="FooterCopyright">{bottomBar.copyright}</p>
                    <p className="FooterSlogan">
                        {slogan.beforeAdventures}
                        <span className="u-accent">{slogan.adventures}</span>
                        {slogan.middle}
                        <span className="u-accent">{slogan.memories}</span>
                        {slogan.after}
                    </p>
                    <div className="FooterSocial">
                        {bottomBar.social.map((item) => {
                            const Icon = socialIcons[item.id];
                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className="FooterSocialLink"
                                    aria-label={item.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                        <a
                            href="https://okghumo.in/"
                            className="FooterPoweredBy"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Powered by OkGhumo"
                        >
                            <span>Powered by</span>
                            <img src="/Images/Okghumologo.png" alt="OkGhumo" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
