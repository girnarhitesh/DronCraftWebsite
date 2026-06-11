import React from "react";
import "./DroneCraftGallery.css";
import { galleryHeader, galleryItems } from "./galleryData";

const DroneCraftGallery = () => {
    return (
        <section className="DroneCraftGallery SectionPad" id="gallery" aria-labelledby="dcg-title">
            <div className="DroneCraftGalleryInner MaxWidthContainer MarginAuto">
                <header className="DCGHeader">
                    <div className="DCGEyebrow">
                        <span className="DCGEyebrowLine" aria-hidden="true" />
                        <span className="DCGEyebrowText">{galleryHeader.eyebrow}</span>
                    </div>
                    <h2 id="dcg-title" className="DCGTitle">
                        {galleryHeader.title}
                    </h2>
                    <p className="DCGSubtitle">{galleryHeader.subtitle}</p>
                </header>

                <div className="DCGMasonry">
                    {galleryItems.map((item) => (
                        <article
                            key={item.id}
                            className={`DCGCard${item.tall ? " DCGCard--tall" : ""}`}
                        >
                            {item.type === "video" ? (
                                <video
                                    className="DCGMedia"
                                    src={item.src}
                                    poster={item.poster}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    aria-label={item.alt}
                                />
                            ) : (
                                <img className="DCGMedia" src={item.src} alt={item.alt} loading="lazy" />
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DroneCraftGallery;
