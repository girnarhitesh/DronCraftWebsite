import React from "react";
import "./ExperienceHighlights.css";
import {
    experienceHighlightsHeader,
    experienceHighlights,
} from "./experienceHighlightsData";

const ExperienceHighlights = () => {
    return (
        <section className="ExperienceHighlights SectionPad" aria-labelledby="eh-title">
            <div className="ExperienceHighlightsInner MaxWidthContainer MarginAuto">
                <header className="EHHeader">
                    <div className="EHEyebrow">
                        <span className="EHEyebrowLine" aria-hidden="true" />
                        <span className="EHEyebrowText">{experienceHighlightsHeader.eyebrow}</span>
                    </div>
                    <h2 id="eh-title" className="EHTitle">
                        {experienceHighlightsHeader.title}
                    </h2>
                    <p className="EHSubtitle">{experienceHighlightsHeader.subtitle}</p>
                </header>

                <div className="EHGrid">
                    {experienceHighlights.map((item) => (
                        <article key={item.id} className="EHCard">
                            <img className="EHCardImage" src={item.image} alt={item.title} loading="lazy" />
                            <div className="EHCardOverlay" aria-hidden="true" />
                            {/* Corner bracket decorations */}
                            <span className="EHCorner EHCorner--tl" aria-hidden="true" />
                            <span className="EHCorner EHCorner--tr" aria-hidden="true" />
                            <span className="EHCorner EHCorner--bl" aria-hidden="true" />
                            <span className="EHCorner EHCorner--br" aria-hidden="true" />
                            <h3 className="EHCardTitle">{item.title}</h3>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceHighlights;
