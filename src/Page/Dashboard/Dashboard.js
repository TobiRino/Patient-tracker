import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import GraphCard from "../Graph/Graph";
import PatientDetails from "../PatientDetails/Patientdetails";
import DiagnosticList from "../DiagnosticList/DiagnosticList";
import LabResults from "../LabResults/LabResults";
import styles from "./Dashboard.module.css";
import repiratoryrate from "../../Assets/hearrtbpm (2).png";
import temprate from "../../Assets/temperature.png";
import heartrate from "../../Assets/HeartBPM.png";

const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";


function App() {

    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const username = "coalition";
                const password = "skills-test";

                // Encode credentials for Basic Auth
                const encodedCreds = btoa(`${username}:${password}`);

                const res = await fetch(API_URL, {
                    method: "GET",
                    headers: {
                        "Authorization": `Basic ${encodedCreds}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const data = await res.json();
                setPatients(data);

                // Default: select Jessica Taylor
                const jessica = data.find((p) => p.name === "Jessica Taylor");
                setSelectedPatient(jessica || data[0]);
            } catch (err) {
                console.error("API fetch failed:", err);
                setError(err.message);
            }
        };

        fetchPatients();
    }, []);


    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.sidebar}>
                    <Sidebar patients={patients}
                        selectedPatient={selectedPatient}
                        onSelectPatient={setSelectedPatient} />
                </div>

                <div className={styles.main}>
                    <div className={styles.mainGrid}>
                        {/* Graph + cards */}
                        <div className={styles.graphSection}>
                            <div className={styles.graphCarduid}>
                                <p className={styles.diagnosisp}>Diagnosis History</p>
                                <GraphCard selectedPatient={selectedPatient} />
                                <div className={styles.statsRow}>
                                  {(() => {
                                    const latest = selectedPatient?.diagnosis_history?.length
                                      ? selectedPatient.diagnosis_history[selectedPatient.diagnosis_history.length - 1]
                                      : null;
                                    return (
                                      <>
                                        <div className={styles.cardrespire}>
                                          <div className={styles.alcardrespire}>
                                            <img src={repiratoryrate} />
                                            <p className={styles.respierp}>Respiratory Rate</p>
                                            <p className={styles.respierpttu}>
                                              {latest?.respiratory_rate?.value ? `${latest.respiratory_rate.value} bpm` : "--"}
                                            </p>
                                            <p className={styles.respierpyt}>Normal</p>
                                          </div>
                                        </div>
                                        <div className={styles.cardtemp}>
                                          <img src={temprate} />
                                          <p>Temperature</p>
                                          <p className={styles.respierpttu}>
                                            {latest?.temperature?.value ? `${latest.temperature.value} F` : "--"}
                                          </p>
                                          <p className={styles.respierpyt}>Normal</p>
                                        </div>
                                        <div className={styles.cardheart}>
                                          <img src={heartrate} />
                                          <p>Heart Rate</p>
                                          <p className={styles.respierpttu}>
                                            {latest?.heart_rate?.value ? `${latest.heart_rate.value} bpm` : "--"}
                                          </p>
                                          <p className={styles.respierpyt}>Normal</p>
                                        </div>
                                      </>
                                    );
                                  })()}
                                </div>
                            </div>

                            <DiagnosticList
                                data={selectedPatient?.diagnostic_list || []}
                            />
                        </div>

                        {/* Patient Info + Lab Results */}
                        <div className={styles.infoSection}>
                            {selectedPatient && <PatientDetails data={selectedPatient} />}
                            {selectedPatient && <LabResults data={selectedPatient.lab_results || []} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;