import Image from "next/image";

type UserCardProps = { type: string }

export default function UserCard({type}: UserCardProps) {
  return (
    <div
      className="rounded-2xl flex-1 odd:bg-lamaPurple even:bg-lamaYellow p-4"
    >
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2025/11</span>
        <Image src="/more.png" alt="More icon" width={20} height={20}/>
      </div>
      <h2 className="text-2xl font-semibold my-4">1,234</h2>
      <h3 className="capitalize text-sm font-medium text-gray-500">{type}</h3>

    </div>
  )
}
