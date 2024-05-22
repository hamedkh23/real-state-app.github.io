"use client";

import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Card from "@/module/Card";

function DashboardCard({ data }) {
  const router = useRouter();

  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };

  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className="flex border-2 border-solid border-[#304ffe58] rounded-2xl mb-5">
      <Card data={data} />
      <div className="flex items-end justify-between p-2.5 w-full">
        <button
          className="flex justify-center items-center w-2/4 bg-white cursor-pointer h-10 rounded-lg text-base border-[1px] border-solid border-[#00a800] text-[#00a800]"
          onClick={editHandler}
        >
          ویرایش
          <FiEdit className="text-lg mr-2.5" />
        </button>
        <button
          className="flex justify-center items-center w-2/4 bg-white cursor-pointer h-10 rounded-lg text-base border-[1px] border-solid border-[#db0505] text-[#db0505]"
          onClick={deleteHandler}
        >
          حذف آگهی
          <AiOutlineDelete className="text-lg mr-2.5" />
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default DashboardCard;
