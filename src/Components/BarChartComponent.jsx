import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarChartComponent() {
    return (
        <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: ['John De', 'Marry Golf', 'Peter M'],
            scaleType: 'band',
            label:"Students"
          },
        ]}
        series={[
          {
            label: "Marks In (%)",
            data: [55, 72, 47],
          },
        ]}
        width={500}
        height={300}
      />
    );
  }