"use client";

import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { sp } from "@/utils/replaceNumber";

function AdminCard({ data: { _id, title, description, location, price } }) {
  const router = useRouter();

  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className="border-b-2 border-solid border-[#304ffe] pb-2.5 mb-20">
      <h3 className="text-xl font-normal text-[#304ffe] mb-5">{title}</h3>
      <p className="text-justify mb-5">{description}</p>
      <div className="flex mb-5">
        <span className="bg-[#304ffe58] text-[#304ffe] py-1.5 px-2.5 ml-3.5 rounded">
          {location}
        </span>
        <span className="bg-[#304ffe58] text-[#304ffe] py-1.5 px-2.5 ml-3.5 rounded">
          {sp(price)}
        </span>
      </div>
      <button
        className="bg-[#00a800] border-none border-0 py-1.5 px-4 text-base font-normal text-white rounded-md cursor-pointer mt-5 transition-all ease-in delay-100 hover:text-black"
        onClick={publishHandler}
      >
        انتشار
      </button>
      <Toaster />
    </div>
  );
}

export default AdminCard;
