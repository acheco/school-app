'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import Image from 'next/image';

// #region Sample data
const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 80,
    absent: 20,
  },
  {
    name: 'Wed',
    present: 70,
    absent: 30,
  },
  {
    name: 'Thu',
    present: 85,
    absent: 15,
  },
  {
    name: 'Fri',
    present: 90,
    absent: 10,
  },
];

const AttendanceChart = () => {
  return (
    <div className="h-full rounded-2xl bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="More icon" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%" minWidth="0">
        <BarChart responsive barSize={20} width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
          />
          <YAxis width="auto" stroke="#ddd" tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            iconType="circle"
            wrapperStyle={{ paddingTop: '10px', paddingBottom: '30px' }}
          />
          <Bar dataKey="present" fill="#FAE27C" radius={[10, 10, 0, 0]} />
          <Bar dataKey="absent" fill="#C3EBFA" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
