import React from "react";
import "./Button.css";
import { useBookingModal } from "../BookingModal/BookingModalProvider";

const Button = ({ variant = "primary", icon, children, onClick, className = "", bookingTitle = "", ...props }) => {
    const { openBookingModal } = useBookingModal();
    const labelText = typeof children === "string" ? children.trim().toLowerCase() : "";
    const isBookNowButton = labelText === "book now" || labelText === "view details";

    const handleClick = (event) => {
        if (isBookNowButton) {
            event.preventDefault();
            openBookingModal(bookingTitle || (typeof children === "string" ? children : ""));
            return;
        }

        if (onClick) {
            onClick(event);
        }
    };

    return (
        <button
            className={`Btn Btn--${variant} ${className}`.trim()}
            onClick={handleClick}
            {...props}
        >
            <span className="BtnText">{children}</span>
            {icon && <span className="BtnIconCircle">{icon}</span>}
        </button>
    );
};

export default Button;