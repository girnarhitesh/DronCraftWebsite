import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { CONTACT_PHONE, WHATSAPP_LINK } from "../../constants/contact";
import "./WhatsAppFloat.css";

const WhatsAppFloat = () => {
    return (
        <a
            className="WhatsAppFloat"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat on WhatsApp: ${CONTACT_PHONE.display}`}
            title={`WhatsApp ${CONTACT_PHONE.display}`}
        >
            <FaWhatsapp size={26} />
        </a>
    );
};

export default WhatsAppFloat;
