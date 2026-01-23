"use client";

import Image from "next/image";

export default function LoginHeader() {
  return (
    <div className="w-full min-h-[30px] relative bg-white border-b-2 border-b-gray-400 px-7 py-[15px]">
      <Image src="https://i.postimg.cc/yN1VjF6M/logo-blue.png" width={72} height={27} className="w-[72px] h-[27px]" alt="logo" />
    </div>
  );
}
