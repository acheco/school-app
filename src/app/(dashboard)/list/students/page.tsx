import TableSearch from '@/components/table-search';
import Image from 'next/image';
import Pagination from '@/components/pagination';
import Table from '@/components/table';
import { Teacher } from '@/types';
import Link from 'next/link';
import { role, teachersData } from '@/lib/data';

const columns = [
  {
    header: 'Info',
    accessor: 'info',
  },
  {
    header: 'Teacher ID',
    accessor: 'teacherId',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Classes',
    accessor: 'classes',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Subjects',
    accessor: 'subjects',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Address',
    accessor: 'address',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
];

export default function TeachersListPage() {
  const renderRow = (item: Teacher) => {
    return (
      <tr
        key={item.id}
        className="hover:bg-lamaPurpleLight space-y-4 border-b border-gray-200 text-sm even:bg-slate-50"
      >
        <td className="flex items-center gap-4 p-4">
          <div className="bg-lamaSky flex h-8 w-8 items-center justify-center rounded-full md:hidden lg:block">
            <Image
              src={item.photo}
              alt="Teacher avatar"
              width={40}
              height={40}
              className="h-8 w-8 rounded-full object-cover md:hidden lg:block"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{item.name}</span>
            <span className="text-xs text-gray-500">{item?.email}</span>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.teacherId}</td>
        <td className="hidden md:table-cell">{item.subjects.join(',')}</td>
        <td className="hidden md:table-cell">{item.classes.join(',')}</td>
        <td className="hidden lg:table-cell">{item.phone}</td>
        <td className="hidden lg:table-cell">{item.address}</td>
        <td>
          <div className="flex items-center gap-4">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="bg-lamaSky m-auto flex h-7 w-7 items-center justify-center rounded-full">
                <Image src="/view.png" alt="View icon" width={16} height={16} />
              </button>
            </Link>
            {role === 'admin' && (
              <button className="bg-lamaPurple flex h-7 w-7 items-center justify-center rounded-full">
                <Image
                  src="/delete.png"
                  alt="View icon"
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
        <h1 className="hidden text-lg font-semibold md:block">All Teachers</h1>
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
        <Table columns={columns} renderRow={renderRow} data={teachersData} />
      </div>
      {/*Pagination*/}
      <Pagination />
    </div>
  );
}
