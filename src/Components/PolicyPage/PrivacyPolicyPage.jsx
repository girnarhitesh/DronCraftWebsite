import React from "react";
import "./PrivacyPolicyPage.css";

const sections = [
    {
        title: "1. On Collecting Personal Information",
        paragraphs: [
            "In certain circumstances, Dronecraft may request personal information from you, like your name, e-mail address, company name, or telephone number. Your response to these inquiries is strictly voluntary.",
            "Dronecraft uses this information to customize your experience on our website and for business purposes such as improving services, supporting order processing, and informing you about relevant products and services.",
            "In general, you can visit our site without divulging personal information. Some areas may require this information to complete their functions and may not be available otherwise.",
        ],
    },
    {
        title: "2. Disclosure to Third Parties",
        paragraphs: [
            "Dronecraft does not share your information with third parties except business partners who may inform you about related products and services. If you receive unwanted communication, you may ask those partners to remove you from their list.",
        ],
    },
    {
        title: "3. Use of Cookies",
        paragraphs: [
            'Some pages on this site use "cookies," which are small files placed on your device for identification and customization purposes.',
            "Your browser may allow you to accept or reject cookies. If you decline cookies, some features of the website may not function fully.",
            "Dronecraft may update this statement at any time without prior notice.",
        ],
    },
    {
        title: "4. Confidentiality of Shared Information",
        paragraphs: [
            'Any "personal information" you share through this website is treated as confidential and will not be sold to any third party without your explicit consent.',
            "Personal Information may include your name, address, phone number, email address, or other contact details that identify you.",
        ],
    },
    {
        title: "5. How We Use Personal Information",
        paragraphs: [
            "As a general practice, no personal information is collected apart from information voluntarily submitted by the visitor.",
            "We use submitted information for the purpose for which it is shared. We may also collect non-personal usage information (such as visits, time spent, and pages viewed) to improve our website content and user experience.",
        ],
    },
    {
        title: "6. Children's Data",
        paragraphs: [
            "Our services are not intended for children, and we do not knowingly collect personal information from children under the age of majority in your jurisdiction.",
            "If you are a parent or guardian and believe a child has submitted personal information, please contact us to request deletion.",
            'As of this policy date, we do not have actual knowledge that we "share" or "sell" personal information of individuals under 16 years of age as defined by applicable laws.',
        ],
    },
    {
        title: "7. Changes to This Privacy Policy",
        paragraphs: [
            'We may update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes. Revised versions will be posted on this website with an updated "Last updated" date.',
        ],
    },
    {
        title: "8. Complaints",
        paragraphs: [
            "If you have complaints about how we process your personal information, please contact us using the details below.",
            "Depending on your location, you may have the right to appeal our decision or lodge a complaint with your local data protection authority.",
        ],
    },
];

const PrivacyPolicyPage = () => {
    return (
        <main className="PolicyPage SectionPad">
            <div className="PolicyPageInner MaxWidthContainer MarginAuto">
                <header className="PolicyHeader">
                    <p className="PolicyEyebrow">Legal</p>
                    <h1 className="PolicyTitle">Privacy Policy</h1>
                    <p className="PolicyIntro">
                        Dronecraft is committed to preserving your privacy and safeguarding
                        information submitted through this website. We recognize and value your
                        privacy while balancing business needs in a digital economy.
                    </p>
                    <p className="PolicyUpdated">Last updated: May 28, 2026</p>
                </header>

                <section className="PolicyCard" aria-label="Privacy policy details">
                    {sections.map((section) => (
                        <article key={section.title} className="PolicySection">
                            <h2>{section.title}</h2>
                            {section.paragraphs.map((paragraph, index) => (
                                <p key={`${section.title}-${index}`}>{paragraph}</p>
                            ))}
                        </article>
                    ))}

                    <article className="PolicySection">
                        <h2>9. Contact</h2>
                        <p>
                            For questions about this Privacy Policy or our privacy practices, contact:
                        </p>
                        <ul className="PolicyContactList">
                            <li>Email: raftingvideobydrone@gmail.com</li>
                            <li>
                                Address: Khata no. 15 Shivpuri Rishikesh, Near Indian Oil Petrol Pump,
                                249192, Uttarakhand, India
                            </li>
                        </ul>
                    </article>
                </section>
            </div>
        </main>
    );
};

export default PrivacyPolicyPage;
