import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Modal } from "antd";
import { IoShieldCheckmark, IoCalendarOutline, IoCloseOutline, IoLockClosedOutline } from "react-icons/io5";
import { TbDrone } from "react-icons/tb";
import { BOOKING_IFRAME_URL } from "../../constants/booking";
import "./BookingModal.css";

const BookingModalContext = createContext(null);

export const BookingModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [iframeLoaded, setIframeLoaded] = useState(false);

    const openBookingModal = useCallback((activityTitle = "") => {
        setTitle(activityTitle);
        setIframeLoaded(false);
        setIsOpen(true);
    }, []);

    const closeBookingModal = useCallback(() => {
        setIsOpen(false);
        setTitle("");
        setIframeLoaded(false);
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
                width={1000}
                className="GlobalBookingModal"
                closeIcon={<IoCloseOutline size={20} />}
                title={null}
                destroyOnClose
                maskClosable={false}
            >
                {/* ── Custom header ── */}
                <div className="GBM-Header">
                    <div className="GBM-HeaderTop">
                        <div className="GBM-HeaderLeft">
                            <span className="GBM-DroneIcon" aria-hidden="true">
                                <TbDrone size={22} />
                            </span>
                            <div className="GBM-HeaderText">
                                <span className="GBM-HeaderEyebrow">DroneCraft River Rafting</span>
                                <span className="GBM-HeaderTitle">
                                    {title ? title : "Book Your Adventure"}
                                </span>
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

                    {/* ── Trust points inside header ── */}
                    <div className="GBM-TrustBar GBM-TrustBar--inHeader">
                        <span className="GBM-TrustItem">
                            <IoShieldCheckmark size={13} />
                            Secure Checkout
                        </span>
                        <span className="GBM-TrustDivider" aria-hidden="true" />
                        <span className="GBM-TrustItem">
                            <IoCalendarOutline size={13} />
                            Instant Confirmation
                        </span>
                        <span className="GBM-TrustDivider" aria-hidden="true" />
                        <span className="GBM-TrustItem">
                            <IoLockClosedOutline size={13} />
                            Powered by OkGhumo
                        </span>
                    </div>
                </div>

                {/* ── iframe area ── */}
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
