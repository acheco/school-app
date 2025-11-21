import TableSearch from '@/components/table-search';
import Image from 'next/image';
import Pagination from '@/components/pagination';
import Table from '@/components/table';
import { Classes } from '@/types';
import Link from 'next/link';
import { classesData, role } from '@/lib/data';

const columns = [
  {
    header: 'Class Name',
    accessor: 'name',
  },
  {
    header: 'Capacity',
    accessor: 'capacity',
    className: 'hidden md:table-cell',
  },

  {
    header: 'Grade',
    accessor: 'grade',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Supervisor',
    accessor: 'supervisor',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
];

export default function ClassesListPage() {
  const renderRow = (item: Classes) => {
    return (
      <tr
        key={item.id}
        className="hover:bg-lamaPurpleLight space-y-4 border-b border-gray-200 text-sm even:bg-slate-50"
      >
        <td className="flex items-center gap-4 p-4">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{item.name}</span>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.capacity}</td>
        <td className="hidden md:table-cell">{item.grade}</td>
        <td className="hidden md:table-cell">{item.supervisor}</td>
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
        <h1 className="hidden text-lg font-semibold md:block">All Classes</h1>
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
        <Table columns={columns} renderRow={renderRow} data={classesData} />
      </div>
      {/*Pagination*/}
      <Pagination />
    </div>
  );
}
