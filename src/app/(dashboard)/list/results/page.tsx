import TableSearch from '@/components/table-search';
import Image from 'next/image';
import Pagination from '@/components/pagination';
import Table from '@/components/table';
import { Exam } from '@/types';
import Link from 'next/link';
import { examsData, role } from '@/lib/data';

const columns = [
  {
    header: 'Subject Name',
    accessor: 'info',
  },
  {
    header: 'Class',
    accessor: 'class',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Teacher',
    accessor: 'teacher',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Due Date',
    accessor: 'date',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
];

export default function ExamsListPage() {
  const renderRow = (item: Exam) => {
    return (
      <tr
        key={item.id}
        className="hover:bg-lamaPurpleLight space-y-4 border-b border-gray-200 text-sm even:bg-slate-50"
      >
        <td className="flex items-center gap-4 p-4">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{item.subject}</span>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">{item.teacher}</td>
        <td className="hidden md:table-cell">{item.date}</td>
        <td>
          <div className="flex items-center gap-4">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="bg-lamaSky m-auto flex h-7 w-7 items-center justify-center rounded-full">
                <Image src="/edit.png" alt="Edit icon" width={16} height={16} />
              </button>
            </Link>
            {role === 'admin' && (
              <button className="bg-lamaPurple flex h-7 w-7 items-center justify-center rounded-full">
                <Image
                  src="/delete.png"
                  alt="Delete icon"
                  width={16}
                  height={16}
                />
              </button>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="m-4 mt-0 flex-1 rounded-md bg-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="hidden text-lg font-semibold md:block">All Subjects</h1>
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="bg-lamaYellow hover:bg-lamaYellowDark flex h-8 w-8 items-center justify-center rounded-full text-xs text-white">
              <Image
                src="/filter.png"
                alt="filter icon"
                width={14}
                height={14}
              />
            </button>{' '}
            <button className="bg-lamaYellow hover:bg-lamaYellowDark flex h-8 w-8 items-center justify-center rounded-full text-xs text-white">
              <Image src="/sort.png" alt="Sort icon" width={14} height={14} />
            </button>{' '}
            <button className="bg-lamaYellow hover:bg-lamaYellowDark flex h-8 w-8 items-center justify-center rounded-full text-xs text-white">
              <Image src="/plus.png" alt="Plus icon" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/*List*/}
      <div>
        <Table columns={columns} renderRow={renderRow} data={examsData} />
      </div>
      {/*Pagination*/}
      <Pagination />
    </div>
  );
}
