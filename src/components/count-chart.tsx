'use client';

import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

// #region Sample data
const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 53,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 53,
    fill: '#C3EBFA',
  },
];

const CountChart = () => {
  return (
    <div className="h-full w-full rounded-2xl bg-white p-4">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Students</h2>
        <Image
          src="/moreDark.png"
          alt="More icon"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>

      <div className="relative h-[75%] w-full">
        <ResponsiveContainer>
          <RadialBarChart
            responsive
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="Male and Female Img "
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="flex justify-center gap-16">
          <div className="flex flex-col items-center gap-1">
            <div className="bg-lamaSky h-5 w-5 rounded-full" />
            <h1 className="font-bold">1,234</h1>
            <h2 className="text-sm text-gray-300">Boys (55%)</h2>
          </div>
        </div>
        <div className="flex justify-center gap-16">
          <div className="flex flex-col items-center gap-1">
            <div className="bg-lamaYellow h-5 w-5 rounded-full" />
            <h1 className="font-bold">1,234</h1>
            <h2 className="text-sm text-gray-300">Girls (45%)</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
