import React from "react";
import "./WhyChooseUs.css";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import { comparisonTable } from "./whyChooseUsData";

const WhyChooseUs = () => {
    return (
        <section className="WhyChooseUs SectionPad" id="why-choose-us" aria-labelledby="why-choose-us-title">
            <div className="WhyChooseUsInner MaxWidthContainer MarginAuto">
                <header className="WhyChooseUsHeader">
                    <h2 id="why-choose-us-title" className="WhyChooseUsTitle">
                        Why Choose Us
                    </h2>
                </header>

                <div className="WhyChooseUsTableWrap">
                    <table className="WhyChooseUsTable">
                        <thead>
                            <tr>
                                <th scope="col">Category</th>
                                <th scope="col">Key Factors</th>
                                <th scope="col">DroneCraft Rafting</th>
                                <th scope="col">Rafting with Others</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonTable.map((group) =>
                                group.rows.map((row, rowIndex) => (
                                    <tr key={`${group.category}-${row.key}`}>
                                        {rowIndex === 0 && (
                                            <th
                                                scope="rowgroup"
                                                rowSpan={group.rows.length}
                                                className="WCUCategory"
                                            >
                                                {group.category}
                                            </th>
                                        )}
                                        <th scope="row" className="WCUKey">
                                            {row.key}
                                        </th>
                                        <td className="WCUDrone">
                                            <span className="WCUCell">
                                                <IoCheckmarkCircle
                                                    className="WCUIcon WCUIcon--yes"
                                                    aria-hidden="true"
                                                />
                                                <span>{row.dronecraft}</span>
                                            </span>
                                        </td>
                                        <td className="WCUOthers">
                                            <span className="WCUCell">
                                                <IoCloseCircle
                                                    className="WCUIcon WCUIcon--no"
                                                    aria-hidden="true"
                                                />
                                                <span>{row.others}</span>
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
