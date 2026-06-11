import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { googleSummary, sectionHeader, reviews } from "./reviewsData";
import "./DroneCraftStories.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const TRUNCATE_LEN = 120;

function StarRating({ rating, max = 5 }) {
    return (
        <span className="DCSStars" aria-label={`${rating} out of ${max} stars`}>
            {Array.from({ length: max }, (_, i) => (
                <span key={i} className={i < Math.round(rating) ? "DCSStar DCSStar--on" : "DCSStar"}>
                    ★
                </span>
            ))}
        </span>
    );
}

function ReviewCard({ review }) {
    const [expanded, setExpanded] = useState(false);
    const needsTruncate = review.readMore && review.text.length > TRUNCATE_LEN;
    const displayText =
        needsTruncate && !expanded ? `${review.text.slice(0, TRUNCATE_LEN).trim()}…` : review.text;

    return (
        <article className="DCSReviewCard">
            <div className="DCSReviewCardTop">
                <StarRating rating={review.rating} />
                <FcGoogle className="DCSGoogleMark" aria-label="Google review" />
            </div>

            <p className="DCSReviewText">
                {displayText}
                {needsTruncate && !expanded && (
                    <button
                        type="button"
                        className="DCSReadMore"
                        onClick={() => setExpanded(true)}
                    >
                        Read more
                    </button>
                )}
            </p>

            {review.image && (
                <img className="DCSReviewImage" src={review.image} alt="" loading="lazy" />
            )}

            <div className="DCSReviewFooter">
                <span
                    className="DCSAvatar"
                    style={{ background: review.avatarColor }}
                    aria-hidden="true"
                >
                    {review.avatarInitial}
                </span>
                <span className="DCSReviewMeta">
                    <strong>{review.userName}</strong>
                    <span>{review.timeAgo}</span>
                </span>
            </div>
        </article>
    );
}

const DroneCraftStories = () => {
    const summaryStars = Math.floor(googleSummary.rating);

    return (
        <section className="DroneCraftStories SectionPad" id="reviews" aria-labelledby="dcs-title">
            <div className="DroneCraftStoriesInner MaxWidthContainer MarginAuto">
                <header className="DCSHeader">
                    <div className="DCSEyebrow">
                        <span className="DCSEyebrowLine" aria-hidden="true" />
                        <span className="DCSEyebrowText">{sectionHeader.eyebrow}</span>
                        <span className="DCSEyebrowLine" aria-hidden="true" />
                    </div>
                    <h2 id="dcs-title" className="DCSTitle">
                        {sectionHeader.title}
                    </h2>
                    <p className="DCSSubtitle">{sectionHeader.subtitle}</p>
                </header>

                <div className="DCSGoogleBar">
                    <div className="DCSGoogleInfo">
                        <img
                            className="DCSGoogleAvatar"
                            src={googleSummary.avatar}
                            alt=""
                            loading="lazy"
                        />
                        <div className="DCSGoogleText">
                            <strong>{googleSummary.name}</strong>
                            <div className="DCSGoogleRatingRow">
                                <span className="DCSGoogleScore">{googleSummary.rating}</span>
                                <StarRating rating={summaryStars} />
                                <span className="DCSGoogleCount">
                                    {googleSummary.reviewCount} reviews
                                </span>
                            </div>
                        </div>
                    </div>
                    <a
                        className="DCSGoogleBtn"
                        href={googleSummary.googleReviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Review us on Google</span>
                        <span className="DCSGoogleBtnIcon" aria-hidden="true">
                            <FcGoogle size={20} />
                        </span>
                    </a>
                </div>

                <div className="DCSSwiperWrap">
                    <button
                        type="button"
                        className="DCSSwiperBtn DCSSwiperBtn--prev"
                        aria-label="Previous reviews"
                    >
                        <IoChevronBack size={20} />
                    </button>

                    <Swiper
                        className="DCSSwiper"
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={{
                            prevEl: ".DCSSwiperBtn--prev",
                            nextEl: ".DCSSwiperBtn--next",
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{ clickable: true, el: ".DCSSwiperPagination" }}
                        spaceBetween={16}
                        slidesPerView={1.15}
                        loop={true}
                        speed={800}
                        breakpoints={{
                            560: { slidesPerView: 2, spaceBetween: 16 },
                            900: { slidesPerView: 3, spaceBetween: 18 },
                            1200: { slidesPerView: 4, spaceBetween: 20 },
                        }}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id} className="DCSSlide">
                                <ReviewCard review={review} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        type="button"
                        className="DCSSwiperBtn DCSSwiperBtn--next"
                        aria-label="Next reviews"
                    >
                        <IoChevronForward size={20} />
                    </button>

                    <div className="DCSSwiperPagination" />
                </div>
            </div>
        </section>
    );
};

export default DroneCraftStories;
