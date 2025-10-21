import React from "react";
import { BsThreeDotsVertical, BsThreeDots  } from "react-icons/bs"; // for the ellipsis menu
import styles from "./Sidebar.module.css";
import emily from "../../Assets/Emily.png";
import ryan from "../../Assets/ryan.png";
import brandon from "../../Assets/brandon.png";
import jessica from "../../Assets/Jessica.png";
import samantha from "../../Assets/samantha.png";
import ashley from "../../Assets/ashley.png";
import olivia from "../../Assets/olivia.png";
import tyler from "../../Assets/tyler.png";
import kevin from "../../Assets/Kelvin (2).png";
import dylan from "../../Assets/dylan.png";
import nathan from "../../Assets/nathan.png";
import mike from "../../Assets/mike.png";

// Sample patient list with avatar, gender, and age
const avatars = [
  { name: "Emily Williams", gender: "Female", age: 18, avatar: emily },
  { name: "Ryan Johnson", gender: "Male", age: 45, avatar: ryan },
  { name: "Brandon Mitchell", gender: "Male", age: 36, avatar: brandon },
  { name: "Jessica Taylor", gender: "Female", age: 28, avatar: jessica },
  { name: "Samantha Johnson", gender: "Female", age: 56, avatar: samantha },
  { name: "Ashley Martinez", gender: "Female", age: 54, avatar: ashley },
  { name: "Olivia Brown", gender: "Female", age: 32, avatar: olivia },
  { name: "Tyler Davis", gender: "Male", age: 19, avatar: tyler },
  { name: "Kevin Anderson", gender: "Male", age: 30, avatar: kevin },
  { name: "Dylan Thompson", gender: "Male", age: 36, avatar: dylan },
  { name: "Nathan Evans", gender: "Male", age: 58, avatar: nathan },
  { name: "Mike Nolan", gender: "Male", age: 31, avatar: mike },
];

const Sidebar = ({ patients, selectedPatient, onSelectPatient }) => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Patients</h2>
      <ul className={styles.patientList}>
        {patients.map((p, i) => (
          <li key={i} className={`${styles.patient} ${
              selectedPatient?.name === p.name ? styles.active : ""
            }`}
            onClick={() => onSelectPatient(p)}>
            <div className={styles.imgleft}>
                 <img src={avatars[p.name] || p.profile_picture} alt={p.name} className={styles.avatar} />
            <div className={styles.info}>
              <span className={styles.name}>{p.name}</span>
              <span className={styles.subheading}>
                {p.gender}, {p.age}
              </span>
            </div>
            </div>
           
            <BsThreeDots className={styles.ellipsis} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
