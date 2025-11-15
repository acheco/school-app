import Link from 'next/link';
import Image from 'next/image';
import Menu from '@/components/menu';
import Navbar from '@/components/navbar';

type DashboardLayoutProps = {
  children: React.ReactNode;
  params: { slug: string };
};
export default function DashboardLayout({
  children,
}: Readonly<DashboardLayoutProps>) {
  return (
    <main className="flex h-screen">
      <div className="w-[14%] p-4 md:w-[20%] lg:w-[16%] xl:w-[14%]">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src="/logo.png" alt="The logo image" width={32} height={32} />
          <span className="hidden font-bold md:block">School App</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] overflow-scroll bg-[#F7F8FA] md:w-[80%] lg:w-[84%] xl:w-[86%]">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
