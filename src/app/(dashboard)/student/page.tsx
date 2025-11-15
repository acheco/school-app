import EventCalendar from '@/components/event-calendar';
import Announcement from '@/components/announcement';
import BigCalendar from '@/components/big-calendar';

export default function StudentPage() {
  return (
    <div className="flex flex-col gap-4 p-4 xl:flex-row">
      {/* Left side */}
      <div className="w-full xl:w-2/3">
        <div className="h-full rounded-md bg-white p-4">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right side */}
      <div className="flex w-full flex-col gap-8 xl:w-1/3">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
}
