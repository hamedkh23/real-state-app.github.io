import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { sp } from "@/utils/replaceNumber";
import { icons } from "@/constants/icons";

function Card({ data: { _id, category, title, location, price } }) {
  return (
    <div className="w-64 border-2 border-solid border-[#304ffe58] rounded-xl p-2.5 m-2.5">
      <div className="text-3xl bg-[#304ffe58] text-[#304ffe] p-1 rounded-md w-10">
        {icons[category]}
      </div>
      <p className="font-normal my-2.5 mx-0">{title}</p>
      <p className="flex text-[#808080] text-sm">
        <HiOutlineLocationMarker className="ml-1 text-base" />
        {location}
      </p>
      <span className="text-[#808080] block text-sm font-normal mt-2.5">
        {sp(price)} تومان
      </span>
      <Link
        className="flex items-center justify-between mt-5 text-base font-normal text-[#304ffe]"
        href={`/buy-residential/${_id}`}
      >
        مشاهده آگهی
        <BiLeftArrowAlt className="text-2xl" />
      </Link>
    </div>
  );
}

export default Card;
