'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    time: '10:00 AM - 2:00 PM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Consectetur adipiscing elit',
    time: '3:00 PM - 5:00 PM',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    title: 'Sed do eiusmod tempor incididunt',
    time: '7:00 PM - 9:00 PM',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

export default function EventCalendar() {
  const [value, onChange] = useState<Value>([null, null]);
  return (
    <div className="rounded-md bg-white p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="my-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Events</h1>
        <Image src="/moreDark.png" alt="More icon" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="odd:border-t-lamaSky even:border-t-lamaPurple rounded-md border-2 border-t-4 border-gray-100 p-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-600">{event.title}</h3>
              <span className="text-xs text-gray-300">{event.time}</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
