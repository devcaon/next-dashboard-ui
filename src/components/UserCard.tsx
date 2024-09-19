import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      {/* top */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white rounded-full px-2 py-1 text-green-600">
          Set/2024
        </span>
        <Image
          src="/more.png"
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      {/* center */}
      <h1 className="text-2xl forn-sembold my-4">1.234</h1>

      {/* bottom */}
      <h2 className="text-gray-600 text-sm font-medium capitalize">{type}</h2>
    </div>
  );
};

export default UserCard;
