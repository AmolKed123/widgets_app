import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart() {
  const xLabels = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <LineChart
      xAxis={[{ scaleType: "point", label: "Months", data: xLabels }]}
      series={[
        {
          label: "Rainfall In (mm)",
          data: [50, 75, 62, 65, 89, 90, 45, 57, 95, 65, 39, 74],
        },
      ]}
      width={500}
      height={300}
    />
  );
}
