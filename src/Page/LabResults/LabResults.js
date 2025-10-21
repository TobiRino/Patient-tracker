import React from "react";
import styles from "./LabResults.module.css";
import dsnlodarrw from "../../Assets/download_FILL0_wght300_GRAD0_opsz24 (1).png";

const LabResults = ({data = []}) => {
  const fallbackResults = ["Blood Tests", "CT Scans", "Radiology Reports", "X-Rays", "Urine Test"];
  const results = data.length > 0 ? data : fallbackResults;
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Lab Results</h2>
      <ul className={styles.list}>
        {results.map((r, i) => (
          <li key={i} className={styles.item}>
            <span>{r}</span>
            <button className={styles.download}><img src={dsnlodarrw} /></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;
