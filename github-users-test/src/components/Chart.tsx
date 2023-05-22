import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { UserFull } from '../interfaces/User';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        autoSkip: false,
        maxRotation: 90,
        minRotation: 75,
        font: {
          size: 15,
        }
      }
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,

      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        fontSize: 20,
      }
    },
    title: {
      display: true,
      text: 'Followers by Github User',
      font:{
        size: 18,
      }
    },
  },
};

interface Props {
  data: UserFull[];
  labels: string[];
}
const Chart: React.FC<Props> = ({
  data,
}) => {
  return (
    <div className='w-full mt-2' style={{
      minHeight: '350px',
    }}>
      <Bar options={options} data={{
        labels: data.map((user) => user.login),
        datasets: [
          {
            label: 'Followers',
            data: data.map((user) => user.followers),
            backgroundColor: 'rgba(14,116,144,0.8)',
          },
        ],

      }} />
    </div>
  )
}

export default Chart