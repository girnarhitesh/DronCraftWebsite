import React, { useEffect } from "react";
import "./PrivacyPolicyPage.css";

const sections = [
    {
        title: "Eligibility for Rafting",
        paragraphs: [
            "Participants must meet the following conditions:",
        ],
        bullets: [
            "Age criteria for 12 Km: 14 years to 65 years.",
            "Age criteria for 16 Km: 16 years to 60 years.",
            "Weight: below 105 kg (depending on tour operator and river conditions).",
            "Participants should be physically fit and mentally stable.",
            "Pregnant women are not allowed.",
            "People with heart disease, epilepsy, severe asthma, back injuries, or recent surgery are not permitted without medical clearance.",
            "Intoxicated persons (alcohol/drugs) are strictly prohibited.",
            "During bad weather if drones cannot fly, only DSLR video will be offered.",
            "In case of no video due to technical issues, Rs. 300 per person will be refunded.",
        ],
    },
    {
        title: "Cookies",
        paragraphs: [
            "We employ the use of cookies. By accessing Dronecraft, you agree to use cookies in accordance with Dronecraft's Privacy Policy.",
            "Most interactive websites use cookies to retrieve user details for each visit. Cookies are used on certain pages to enable functionality and improve usability.",
            "Some affiliate or advertising partners may also use cookies.",
        ],
    },
    {
        title: "License",
        paragraphs: [
            "Unless otherwise stated, Dronecraft and/or its licensors own the intellectual property rights for all material on Dronecraft. All intellectual property rights are reserved.",
            "You may access material from Dronecraft for personal use, subject to the restrictions in these Terms and Conditions.",
            "You must not:",
        ],
        bullets: [
            "Republish material from Dronecraft.",
            "Sell, rent, or sub-license material from Dronecraft.",
            "Reproduce, duplicate, or copy material from Dronecraft.",
            "Redistribute content from Dronecraft.",
        ],
    },
    {
        title: "Comments and User Content",
        paragraphs: [
            "Parts of this website may allow users to post and exchange opinions and information. Dronecraft does not filter, edit, publish, or review comments before they appear.",
            "Comments reflect the views of the person posting them and do not necessarily reflect the views of Dronecraft.",
            "Dronecraft reserves the right to monitor and remove comments considered inappropriate, offensive, or in breach of these Terms.",
            "You warrant and represent that:",
        ],
        bullets: [
            "You are entitled to post comments and have all necessary licenses and consents.",
            "Comments do not infringe intellectual property rights of third parties.",
            "Comments do not contain defamatory, offensive, indecent, or unlawful material.",
            "Comments are not used to solicit business or promote unlawful activity.",
            "You grant Dronecraft a non-exclusive license to use, reproduce, edit, and authorize others to use your comments in any forms, formats, or media.",
        ],
    },
    {
        title: "Hyperlinking to Our Content",
        paragraphs: [
            "The following organizations may link to our Website without prior written approval:",
        ],
        bullets: [
            "Government agencies",
            "Search engines",
            "News organizations",
            "Online directory distributors",
            "System-wide accredited businesses (excluding certain non-profits and fundraising groups)",
        ],
    },
    {
        title: "Additional Link Requests",
        paragraphs: [
            "We may consider and approve requests from commonly-known consumer/business sources, community sites, charity associations, online directories, internet portals, consulting firms, and educational/trade institutions.",
            "Approved organizations may link by using our corporate name, URL, or another relevant description that fits the linking context.",
            "No use of Dronecraft logos or artwork is allowed for linking without a trademark license agreement.",
        ],
    },
    {
        title: "iFrames",
        paragraphs: [
            "Without prior written approval, you may not create frames around our webpages that alter the visual presentation or appearance of our website.",
        ],
    },
    {
        title: "Content Liability",
        paragraphs: [
            "We are not responsible for content that appears on your website. You agree to protect and defend us against all claims arising from your website.",
            "No links should appear on any website that may be interpreted as libelous, obscene, criminal, or infringing third-party rights.",
        ],
    },
    {
        title: "Reservation of Rights",
        paragraphs: [
            "We reserve the right to request removal of links to our website. By continuously linking to our website, you agree to these linking terms and conditions.",
            "We also reserve the right to amend these terms and linking policy at any time.",
        ],
    },
    {
        title: "Removal of Links from Our Website",
        paragraphs: [
            "If you find any link on our website offensive for any reason, you may contact us at any time. We will consider requests to remove links, but we are not obligated to do so.",
            "We do not ensure all information on this website is correct, complete, or current, nor that the website will always remain available.",
        ],
    },
    {
        title: "Limitation of Liability",
        paragraphs: [
            "To the fullest extent permitted under Indian law, Dronecraft is not responsible for:",
        ],
        bullets: [
            "Direct, indirect, or consequential damages arising from service use.",
            "Temporary unavailability of the platform due to maintenance or technical issues.",
            "Loss or corruption of data or content uploaded by users.",
        ],
    },
    {
        title: "Governing Law & Dispute Resolution",
        bullets: [
            "These Terms are governed by the laws of India.",
            "Any disputes shall be resolved exclusively by courts in India.",
            "Users agree to mandatory arbitration for disputes arising from subscription payments under Indian law, unless otherwise required by law.",
        ],
    },
    {
        title: "Content & Intellectual Property",
        bullets: [
            "All content on Dronecraft, including videos, images, logos, and trademarks, is owned by Dronecraft or its licensors.",
            "You may not reproduce, distribute, or publicly display content without written permission.",
            "Unauthorized use may lead to civil or criminal action under the Copyright Act, 1957 (India).",
        ],
    },
    {
        title: "Disclaimer",
        paragraphs: [
            "To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to this website and its use.",
            "Nothing in this disclaimer will limit or exclude liability for death or personal injury, fraud, fraudulent misrepresentation, or any liability not permitted to be excluded by law.",
            "As long as information and services on this website are provided free of charge, we are not liable for any loss or damage of any nature.",
        ],
    },
];

const TermsAndConditionPage = () => {
    useEffect(() => {
        document.title = "Terms And Condition | Drone Craft";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Read Drone Craft Terms And Condition including eligibility, usage rules, cookies, links, liability, and dispute resolution."
            );
        }
    }, []);

    return (
        <main className="PolicyPage SectionPad">
            <div className="PolicyPageInner MaxWidthContainer MarginAuto">
                <header className="PolicyHeader">
                    <p className="PolicyEyebrow">Legal</p>
                    <h1 className="PolicyTitle">Terms And Condition</h1>
                    <p className="PolicyIntro">
                        Welcome to Dronecraft Adventure, hereby referred to as "Dronecraft". These
                        terms and conditions outline the rules and regulations for the use of our
                        website located at https://dronecraft.co.in/.
                    </p>
                    <p className="PolicyUpdated">Last updated: May 28, 2026</p>
                </header>

                <section className="PolicyCard" aria-label="Terms and conditions details">
                    <article className="PolicySection">
                        <h2>Acceptance of Terms</h2>
                        <p>
                            By accessing this website, we assume you accept these terms and
                            conditions. Do not continue to use Dronecraft if you do not agree to all
                            terms stated on this page.
                        </p>
                        <p>
                            The terminology "Client", "You", and "Your" refers to the person
                            accessing this website and complying with the Company's terms.
                            "Company", "We", "Our", and "Us" refer to Dronecraft. "Party" or
                            "Parties" refers to both the Client and ourselves.
                        </p>
                    </article>

                    {sections.map((section) => (
                        <article key={section.title} className="PolicySection">
                            <h2>{section.title}</h2>
                            {section.paragraphs?.map((paragraph, index) => (
                                <p key={`${section.title}-${index}`}>{paragraph}</p>
                            ))}
                            {section.bullets?.length ? (
                                <ul className="PolicyContactList">
                                    {section.bullets.map((bullet, index) => (
                                        <li key={`${section.title}-bullet-${index}`}>{bullet}</li>
                                    ))}
                                </ul>
                            ) : null}
                        </article>
                    ))}

                    <article className="PolicySection">
                        <h2>Your Privacy</h2>
                        <p>Please read our Privacy Policy for details on data handling.</p>
                    </article>
                </section>
            </div>
        </main>
    );
};

export default TermsAndConditionPage;
