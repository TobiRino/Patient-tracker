import React from "react";
import styles from "./PatientDetails.module.css";
import jessica from "../../Assets/Jessica Taylor.png";
import birth from "../../Assets/BirthIcon.png";
import contact from "../../Assets/PhoneIcon.png";
import shield from "../../Assets/InsuranceIcon.png";
import gender from "../../Assets/FemaleIcon.png";

const PatientDetails = ({ data }) => {
    return (
        <div className={styles.card}>
            <img
                src={data.profile_picture}
                alt={data.name}
                className={styles.avatar}
            />
            <h2 className={styles.name}>{data.name}</h2>
            {/* <p className={styles.meta}>{data.gender}, {data.age}</p> */}
            <div className={styles.info}>
                <div className={styles.dob}>
                    <img src={birth} alt="dob" className={styles.icon} />
                    <div>
                        <p className={styles.dobptg}>Date of Birth: </p>
                        <p className={styles.dobptgsub}>{data.date_of_birth || "N/A"}</p>
                    </div>
                </div>
                <div className={styles.dob}>
                    <img src={gender} alt="dob" className={styles.icon} />
                    <div>
                        <p className={styles.dobptg}>Gender </p>
                        <p className={styles.dobptgsub}>{data.gender || "N/A"}</p>
                    </div>
                </div>

                <div className={styles.dob}>
                    <img src={contact} alt="dob" className={styles.icon} />
                    <div>
                        <p className={styles.dobptg}>Contact: </p>
                        <p className={styles.dobptgsub}> {data.phone_number || "N/A"}</p>
                    </div>
                </div>

                <div className={styles.dob}>
                    <img src={contact} alt="dob" className={styles.icon} />
                    <div>
                        <p className={styles.dobptg}>Emergency: </p>
                        <p className={styles.dobptgsub}> {data.emergency_contact || "N/A"}</p>
                    </div>
                </div>

                <div className={styles.dob}>
                    <img src={shield} alt="dob" className={styles.icon} />
                    <div>
                        <p className={styles.dobptg}>Insurance: </p>
                        <p className={styles.dobptgsub}> {data.insurance_type || "N/A"}</p>
                    </div>
                </div>

            </div>
            <button className={styles.button}>Show All Information</button>
        </div>
    );
};

export default PatientDetails;
