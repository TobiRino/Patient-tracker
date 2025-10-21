import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import styles from "./Graph.module.css";

const GraphCard = ({ selectedPatient }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    console.log("Selected patient:", selectedPatient);
    if (!selectedPatient || !Array.isArray(selectedPatient.diagnosis_history)) {
      setChartData([]);
      return;
    }

    // Extract blood pressure from diagnosis_history
    const formatted = selectedPatient.diagnosis_history.map((d) => ({
      month: `${d.month} ${d.year}`,
      systolic: d?.blood_pressure?.systolic?.value ?? null,
      diastolic: d?.blood_pressure?.diastolic?.value ?? null,
    }));

    setChartData(formatted);
  }, [selectedPatient]);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Blood Pressure</h2>
        <span className={styles.dropdown}>Last 6 months ▼</span>
      </div>

      <div className={styles.graphContainer}>
        {/* Chart */}
        <div className={styles.chartArea}>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="gray" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis domain={[60, 180]} tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  background: "white",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="systolic"
                stroke="#C26EB4"
                strokeWidth={2}
                dot={{ r: 6, fill: "#E66FD2" }}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke="#7E6CAB"
                strokeWidth={2}
                dot={{ r: 6, fill: "#8C6FE6" }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Right side stats */}
        <div className={styles.stats}>
          <div className={styles.statBlock}>
            <div className={styles.legend}>
              <span className={styles.dotPink}></span> Systolic
            </div>
            <p className={styles.value}>
              {chartData.length > 0
                ? chartData[chartData.length - 1].systolic
                : "--"}
            </p>
            <p className={styles.sub}>▲ Higher than Average</p>
          </div>
          <hr />
          <div className={styles.statBlock}>
            <div className={styles.legend}>
              <span className={styles.dotPurple}></span> Diastolic
            </div>
            <p className={styles.value}>
              {chartData.length > 0
                ? chartData[chartData.length - 1].diastolic
                : "--"}
            </p>
            <p className={styles.sub}>▼ Lower than Average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
