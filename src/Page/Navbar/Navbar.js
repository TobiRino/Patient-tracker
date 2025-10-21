import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../Assets/TestLogo.svg";
import drimg from "../../Assets/drimg-sml.png";
import ovrvw from "../../Assets/home_FILL0_wght300_GRAD0_opsz24.png";
import patient from "../../Assets/group_FILL0_wght300_GRAD0_opsz24.png";
import schedule from "../../Assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import chat from "../../Assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.png";
import cardtrsntn from "../../Assets/credit_card_FILL0_wght300_GRAD0_opsz24.png";
import setingsicon from "../../Assets/settings_FILL0_wght300_GRAD0_opsz24.png";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs"; // for the ellipsis menu

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h1 ><img src={logo} className={styles.logo} /></h1>
            <div className={styles.links}>
                <button className={styles.navbutton}><img src={ovrvw} /> <span className={styles.home}> Overview</span></button>
                <button className={`${styles.active} ${styles.navbutton}`}><img src={patient} /><span className={styles.home}>Patients</span></button>
                <button className={styles.navbutton}><img src={schedule} /><span className={styles.home}>Schedule</span></button>
                <button className={styles.navbutton}><img src={chat} /> <span className={styles.home}>Message</span></button>
                <button className={styles.navbutton}><img src={cardtrsntn} /><span className={styles.home}>Transactions</span></button>
            </div>
            <div className={styles.profile}>
                <img
                    src={drimg}
                    alt="doctor"
                    className={styles.avatar}
                />
                <div >
                    <p className={styles.drname}>Dr. Jose Simmons</p>
                    <p className={styles.drnamepostn}>General Practitioner</p>
                </div>
                <div className={styles.drinfo} />
                <div>
                    <img src={setingsicon} />
                    <BsThreeDotsVertical className={styles.ellipsis} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
