import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Modal } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline, IoRainyOutline, IoCalendarOutline } from "react-icons/io5";
import { TbDrone } from "react-icons/tb";
// import { BOOKING_IFRAME_URL } from "../../constants/booking";
import "./BookingModal.css";

const BookingModalContext = createContext(null);

const RAIN_DROPS = Array.from({ length: 48 }, (_, i) => ({
    id: i,
    left: `${(i * 7.3) % 100}%`,
    delay: `${(i % 12) * 0.18}s`,
    duration: `${0.7 + (i % 5) * 0.22}s`,
    height: `${10 + (i % 6) * 4}px`,
    opacity: 0.25 + (i % 5) * 0.12,
}));

const contentVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, y: 12, scale: 0.98, transition: { duration: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.15 + i * 0.1, duration: 0.45, ease: "easeOut" },
    }),
};

const BookingModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [title, setTitle] = useState("");
    // const [iframeLoaded, setIframeLoaded] = useState(false);

    const openBookingModal = useCallback(() => {
        // setTitle(activityTitle);
        // setIframeLoaded(false);
        setIsOpen(true);
    }, []);

    const closeBookingModal = useCallback(() => {
        setIsOpen(false);
        // setTitle("");
        // setIframeLoaded(false);
    }, []);

    const contextValue = useMemo(
        () => ({ openBookingModal, closeBookingModal }),
        [openBookingModal, closeBookingModal]
    );

    return (
        <BookingModalContext.Provider value={contextValue}>
            {children}

            <Modal
                open={isOpen}
                onCancel={closeBookingModal}
                footer={null}
                centered
                width={560}
                className="GlobalBookingModal GlobalBookingModal--season"
                closeIcon={<IoCloseOutline size={20} />}
                title={null}
                destroyOnClose
                maskClosable
            >
                <div className="GBM-SeasonWrap">
                    <div className="GBM-Rain" aria-hidden="true">
                        {RAIN_DROPS.map((drop) => (
                            <span
                                key={drop.id}
                                className="GBM-RainDrop"
                                style={{
                                    left: drop.left,
                                    animationDelay: drop.delay,
                                    animationDuration: drop.duration,
                                    height: drop.height,
                                    opacity: drop.opacity,
                                }}
                            />
                        ))}
                        <div className="GBM-RainMist" />
                    </div>

                    <div className="GBM-Header">
                        <div className="GBM-HeaderTop">
                            <div className="GBM-HeaderLeft">
                                <span className="GBM-DroneIcon" aria-hidden="true">
                                    <TbDrone size={22} />
                                </span>
                                <div className="GBM-HeaderText">
                                    <span className="GBM-HeaderEyebrow">DroneCraft River Rafting</span>
                                    <span className="GBM-HeaderTitle">Seasonal Update</span>
                                </div>
                            </div>
                            <button
                                className="GBM-CloseBtn"
                                onClick={closeBookingModal}
                                aria-label="Close booking modal"
                                type="button"
                            >
                                <IoCloseOutline size={20} />
                            </button>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {isOpen && (
                            <motion.div
                                className="GBM-SeasonBody"
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <motion.div
                                    className="GBM-SeasonIcon"
                                    custom={0}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    aria-hidden="true"
                                >
                                    <motion.span
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <IoRainyOutline size={48} />
                                    </motion.span>
                                </motion.div>

                                <motion.h2
                                    className="GBM-SeasonHeadline"
                                    custom={1}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    Rafting paused from mid-September
                                </motion.h2>

                                <motion.p
                                    className="GBM-SeasonLead"
                                    custom={2}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    Due to monsoon rains and high water levels on the Ganga,{" "}
                                    <a
                                        href="https://www.bucketlistt.com/river-rafting"
                                        className="GBM-KeywordLink"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        river rafting
                                    </a>{" "}
                                    in Rishikesh is temporarily stopped for safety.
                                </motion.p>

                                <motion.p
                                    className="GBM-SeasonCopy"
                                    custom={3}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    Online bookings will reopen once the river conditions are safe again.
                                    Thank you for understanding — we can&apos;t wait to welcome you back
                                    for an unforgettable rafting adventure with cinematic drone footage.
                                </motion.p>

                                <motion.div
                                    className="GBM-SeasonBadge"
                                    custom={4}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <IoCalendarOutline size={16} aria-hidden="true" />
                                    <span>Bookings reopen after the rains ease</span>
                                </motion.div>

                                <motion.button
                                    type="button"
                                    className="GBM-SeasonCta"
                                    custom={5}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={closeBookingModal}
                                >
                                    Got it
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* ── Original booking iframe (kept for when season reopens) ──
                <div className="GBM-IframeWrap">
                    {!iframeLoaded && (
                        <div className="GBM-Loader" aria-label="Loading booking page">
                            <span className="GBM-LoaderSpinner" />
                            <span className="GBM-LoaderText">Loading booking page…</span>
                        </div>
                    )}
                    <iframe
                        src={BOOKING_IFRAME_URL}
                        title="DroneCraft River Rafting booking"
                        className={`GBM-Iframe${iframeLoaded ? " GBM-Iframe--visible" : ""}`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allow="fullscreen"
                        onLoad={() => setIframeLoaded(true)}
                    />
                </div>
                */}
            </Modal>
        </BookingModalContext.Provider>
    );
};

export const useBookingModal = () => {
    const context = useContext(BookingModalContext);
    if (!context) {
        throw new Error("useBookingModal must be used within BookingModalProvider");
    }
    return context;
};

export { BookingModalProvider };
