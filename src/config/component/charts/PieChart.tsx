import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(Title, Tooltip, ArcElement, Legend);

const labels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'OUTCOME',
      data: [200, 350, 450, 300, 550, 400, 600],
      backgroundColor: [
        '#38B2AC',
        '#E53E3E',
        '#F6AD55',
        '#DD6B20',
        '#4A5568',
        '#667EEA',
        '#9F7AEA',
      ],
    },
  ],
};

const options: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: window.innerWidth >= 768 ? 'right' : 'bottom', // Place legend at right on desktop, and bottom on mobile
      align: 'center',
      labels: {
        boxWidth: 10,
        padding: 10,
      },
    },
    title: {
      display: true,
      text: 'Pie Chart',
    },
  },
};

const PieChart: React.FC = () => {
  return <Pie options={options} data={data} />;
};

export default PieChart;
