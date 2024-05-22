"use client";

import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

function LogoutButton() {
  return (
    <button
      className="flex bg-none border-none mt-5 w-full text-right text-base text-[#db0505] cursor-pointer"
      onClick={signOut}
    >
      <FiLogOut className="ml-1 text-xl text-[#db0505]" />
      خروج
    </button>
  );
}

export default LogoutButton;
