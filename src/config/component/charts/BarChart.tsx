import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { observer } from "mobx-react-lite";

import { Bar } from "react-chartjs-2";

const BarChart = observer(() => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "OUTCOME",
        data: [200, 350, 450, 300, 550, 400, 600],
        borderColor: "#38B2AC",
        backgroundColor: "#38B2AC",
      },
      {
        label: "CURRENT",
        data: [300, 250, 350, 400, 300, 500, 700],
        borderColor: "#E53E3E",
        backgroundColor: "#E53E3E",
      },
    ],
  };

  const options: any = {
    responsive: true, // Set responsive to true
    maintainAspectRatio: false, // Allow the chart to resize with the container
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bar Chart",
      },
    },
  };

  return <Bar options={options} data={data} />;
});

export default BarChart;
