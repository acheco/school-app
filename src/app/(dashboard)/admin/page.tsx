'use client';

import UserCard from '@/components/user-card';
import CountChart from '@/components/count-chart';
import AttendanceChart from '@/components/attendance-chart';
import FinanceChart from '@/components/finance-chart';
import EventCalendar from '@/components/event-calendar';

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {/* Left side */}
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        {/* User cards */}
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle Chart */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="h-[450px] w-full lg:w-1/3">
            <CountChart />
          </div>
          <div className="h-[450px] w-full lg:w-2/3">
            <AttendanceChart />
          </div>
        </div>
        {/* Bottom Chart */}
        <div className="h-[500px] w-full">
          <FinanceChart />
        </div>
      </div>
      {/* Right side */}
      <div className="flex w-full flex-col gap-8 lg:w-1/3">
        <EventCalendar />
      </div>
    </div>
  );
}
