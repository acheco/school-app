import Image from 'next/image';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'Jun',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'Jul',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Ago',
    income: 8546,
    expense: 6478,
  },
  {
    name: 'Sep',
    income: 2485,
    expense: 5789,
  },
  {
    name: 'Oct',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'nov',
    income: 2578,
    expense: 4256,
  },
  {
    name: 'Dic',
    income: 4500,
    expense: 3200,
  },
];

export default function FinanceChart() {
  return (
    <div className="h-full rounded-2xl bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="More icon" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%" minWidth="0">
        <LineChart
          responsive
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            width="auto"
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            iconType="circle"
            wrapperStyle={{ paddingTop: '5px', paddingBottom: '30px' }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
