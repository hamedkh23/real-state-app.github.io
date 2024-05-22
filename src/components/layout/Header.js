"use client";

import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { useSession } from "next-auth/react";

function Header() {
  const { data } = useSession();

  return (
    <header className="flex justify-between items-center p-5 my-5 mx-0 rounded-xl bg-[#304ffe] text-white">
      <div>
        <ul className="list-none flex list-image-none">
          <li className="ml-8 max-sm:ml-2.5">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="ml-8 max-sm:ml-2.5">
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>
      {data ? (
        <div>
          <Link
            className="flex items-center bg-white text-[#304ffe] py-1 px-2 rounded-md transition-all ease-in delay-100 hover:bg-[#304ffe] hover:text-white"
            href="/dashboard"
          >
            <FaUserAlt className="text-2xl" />
          </Link>
        </div>
      ) : (
        <div>
          <Link
            className="flex items-center bg-white text-[#304ffe] py-1 px-2 rounded-md transition-all ease-in delay-100 hover:bg-[#304ffe] hover:text-white"
            href="/signin"
          >
            <FiLogIn className="text-2xl" />
            <span className="mr-1.5">ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
