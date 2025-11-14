import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      {/*  Search bar */}
      <div className="hidden md:flex mf:flex items-center gap-2 text-sm ring-[1.5px] ring-gray-300 px-2 rounded-full">
        <Image src="/search.png" alt="Search icon" width={14} height={14}/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>

      {/*  Icons and User */}
      <div className="flex items-center justify-end w-full gap-6">
        <div className="bg-white rounded-2xl w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="Message icon" width={20} height={20}/>
        </div>
        <div className="bg-white rounded-2xl w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="announcement icon" width={20} height={20}/>
          <div
            className="absolute -top-3 -right-3 w-5 h-5 flex items-center rounded-full justify-center text-sm bg-purple-500 text-white "
          >
            1
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src="/avatar.png" alt="User avatar" width={32} height={32} className="rounded-full"/>
      </div>
    </div>
  )
}
