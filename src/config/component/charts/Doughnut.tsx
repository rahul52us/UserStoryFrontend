import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, DoughnutController } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(Title, Tooltip, ArcElement, Legend, DoughnutController);

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
      text: 'Doughnut Chart',
    },
    doughnut: {
      cutout: '60%', // Adjust the cutout size to control the size of the inner circle (donut hole)
    },
  },
};

const DonutChart: React.FC = () => {
  return <Doughnut options={options} data={data} />;
};

export default DonutChart;
