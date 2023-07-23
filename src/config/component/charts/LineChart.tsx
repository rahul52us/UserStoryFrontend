  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
  } from "chart.js";

  import { Line } from "react-chartjs-2";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ["January", "February", "March", "April", "May", "June", "July"];

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
    maintainAspectRatio: false, // Allow the chart to resize with the container

    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart",
      },
    },
  };

  const LineGraph = () => {
    return <Line options={options} data={data} />;
  };

  export default LineGraph;
