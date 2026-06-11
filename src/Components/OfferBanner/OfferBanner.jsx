import React from "react";
import "./OfferBanner.css";

const OfferBanner = ({
    image = "/Images/UpdatedBanner.jpeg",
    alt = "Get ₹500 Thrill Factory voucher per person with every booking from DroneCraft",
    ariaLabel = "Thrill Factory voucher offer",
}) => {
    return (
        <section className="OfferBanner SectionPad" aria-label={ariaLabel}>
            <div className="OfferBannerInner MaxWidthContainer MarginAuto">
                <img className="OfferBannerImg" src={image} alt={alt} loading="lazy" />
            </div>
        </section>
    );
};

export default OfferBanner;
