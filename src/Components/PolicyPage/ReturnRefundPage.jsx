import React, { useEffect } from "react";
import "./PrivacyPolicyPage.css";

const ReturnRefundPage = () => {
    useEffect(() => {
        document.title = "Return & Refund | Drone Craft";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Read Drone Craft Return & Refund Policy including cancellation windows, refund timelines, and extraordinary circumstances."
            );
        }
    }, []);

    return (
        <main className="PolicyPage SectionPad">
            <div className="PolicyPageInner MaxWidthContainer MarginAuto">
                <header className="PolicyHeader">
                    <p className="PolicyEyebrow">Legal</p>
                    <h1 className="PolicyTitle">Return & Refund Policy</h1>
                    <p className="PolicyIntro">
                        Thank you for shopping at Dronecraft. If, for any reason, you are not
                        completely satisfied with a purchase, we invite you to review our policy on
                        refunds and returns.
                    </p>
                    <p className="PolicyUpdated">Last updated: May 28, 2026</p>
                </header>

                <section className="PolicyCard" aria-label="Return and refund policy details">
                    <article className="PolicySection">
                        <h2>Interpretation and Definitions</h2>
                        <p>
                            The words of which the initial letter is capitalized have meanings
                            defined under the following conditions. These definitions shall have the
                            same meaning regardless of whether they appear in singular or plural.
                        </p>
                    </article>

                    <article className="PolicySection">
                        <h2>Definitions</h2>
                        <ul className="PolicyContactList">
                            <li>
                                Company refers to SkySnatch Drones LLP, Khata no. 15, Badrinath
                                Road, Near Indian Oil Petrol Pump, Shivpuri, Bawani, Rishikesh,
                                Tehri Garhwal, Uttarakhand 249192.
                            </li>
                            <li>
                                Goods refer to the activities offered for sale on the
                                website/booking office.
                            </li>
                            <li>Orders mean a request by You to purchase Goods from Us.</li>
                            <li>Service refers to the Website.</li>
                            <li>
                                Website refers to Dronecraft, accessible from
                                https://dronecraft.co.in/
                            </li>
                            <li>
                                You means the individual or legal entity accessing or using the
                                Service, as applicable.
                            </li>
                        </ul>
                    </article>

                    <article className="PolicySection">
                        <h2>Your Order Cancellation Rights</h2>
                        <p>
                            <strong>Cancellation Window:</strong> You may cancel your booking only at
                            least 24 hours prior to the scheduled activity start time. In that case,
                            the booking amount is non-refundable; however, the Thrill Factory voucher
                            may still be redeemed by the booked persons if they wish to do so.
                        </p>
                        <p>
                            Cancellations made less than 24 hours before the scheduled start time are
                            not permitted and any amounts paid are non-refundable.
                        </p>
                        <p>
                            To exercise cancellation, inform us with a clear statement by calling
                            +91 9997501427 or writing to info@dronecraft.co.in.
                        </p>
                    </article>

                    <article className="PolicySection">
                        <h2>Refunds for Cancellations (Services)</h2>
                        <p>
                            For eligible cancellations of rafting/activity bookings, applicable
                            refunds are processed within 14 days from the date we confirm your
                            cancellation.
                        </p>
                        <p>Refunds are issued to the original method of payment.</p>
                    </article>

                    <article className="PolicySection">
                        <h2>Extraordinary Circumstances</h2>
                        <p>
                            If we are unable to operate an activity due to events beyond our
                            reasonable control (including political unrest, government orders,
                            lockdowns, natural disasters, extreme weather, flood conditions, or other
                            safety risks), cash refunds will not be provided.
                        </p>
                        <p>
                            Instead, your booking will be either:
                        </p>
                        <ul className="PolicyContactList">
                            <li>Rescheduled to a later available date, or</li>
                            <li>
                                Converted into a credit/voucher equal to the amount paid, valid for
                                12 months from the original activity date.
                            </li>
                        </ul>
                    </article>

                    <article className="PolicySection">
                        <h2>Non-Recoverable Costs</h2>
                        <p>
                            Any non-recoverable third-party charges, including but not limited to
                            payment gateway fees, are excluded from credits/refunds.
                        </p>
                    </article>

                    <article className="PolicySection">
                        <h2>Compliance Override</h2>
                        <p>
                            If applicable law requires a refund in any scenario, we will comply with
                            such legal requirements.
                        </p>
                    </article>
                </section>
            </div>
        </main>
    );
};

export default ReturnRefundPage;
