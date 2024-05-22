import LogoutButton from "@/module/LogoutButton";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

async function DashboardSidebar({ children, email, role }) {
  return (
    <div className="flex justify-between mt-20">
      <div className="flex flex-col items-center h-fit py-8 px-4 rounded-xl shadow-[#304ffe4a] shadow-[0px_4px_15px] ml-10 w-56">
        <CgProfile className="text-5xl text-[#304ffe]" />
        {role === "ADMIN" ? "Admin" : null}
        <p className="text-[#808080] text-base font-normal mt-5">{email}</p>
        <span className="bg-[#c0c0c0] w-full h-[1px] mb-8"></span>
        <Link className="my-1 font-normal w-full" href="/dashboard">
          حساب کاربری
        </Link>
        <Link className="my-1 font-normal w-full" href="/dashboard/my-profiles">
          آگهی های من
        </Link>
        <Link className="my-1 font-normal w-full" href="/dashboard/add">
          ثبت آگهی
        </Link>
        {role === "ADMIN" ? (
          <Link className="my-1 font-normal w-full" href="/admin">
            در انتظار تایید
          </Link>
        ) : null}
        <LogoutButton />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default DashboardSidebar;
