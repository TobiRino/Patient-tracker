import React from "react";
import styles from "./DiagnosticList.module.css";

const DiagnosticList = ({ data = [] }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Diagnostic List</h2>
       <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead >
          <tr className={styles.theaddglst}>
            <th>Problem</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr><td colSpan="3">No diagnostic data available.</td></tr>
          ) : (
            data.map((d, i) => (
              <tr key={i}>
                <td>{d.name || d.problem || "-"}</td>
                <td>{d.description || d.desc || "-"}</td>
                <td className={styles.status}>{d.status || "-"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
