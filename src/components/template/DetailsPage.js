import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { e2p, sp } from "@/utils/replaceNumber";
import ItemList from "@/module/ItemList";
import Title from "@/module/Title";
import ShareButton from "@/module/ShareButton";
import { icons } from "@/constants/icons";
import { categories } from "@/constants/strings";

function DetailsPage({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  },
}) {
  return (
    <div className="flex mt-14">
      <div className="w-full">
        <h1 className="text-[#304ffe] text-xl font-normal mb-2.5">{title}</h1>
        <span className="flex items-start h-4 mb-12 text-[#808080]">
          <HiOutlineLocationMarker className="text-xl ml-1.5" />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p className="text-justify mb-12">{description}</p>
        <Title>امکانات رفاهی</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>
      <div className="w-64 mr-10">
        <div className="shadow-[0px_4px_15px] shadow-[#304ffe4a] p-2.5 rounded-xl mb-5 flex flex-col items-center">
          <SiHomebridge className="text-5xl text-[#304ffe] mt-2.5 mx-0 mb-5" />
          <p className="text-lg font-normal">املاک {realState}</p>
          <span className="flex items-center text-[#808080] mt-5">
            <AiOutlinePhone className="text-2xl m-0 ml-1.5 text-[#304ffe]" />
            {e2p(phone)}
          </span>
        </div>
        <div className="shadow-[0px_4px_15px] shadow-[#304ffe4a] p-2.5 rounded-xl mb-5">
          <ShareButton />
        </div>
        <div className="shadow-[0px_4px_15px] shadow-[#304ffe4a] p-0 pt-5 rounded-xl mb-5 flex flex-col items-center">
          <p className="flex items-center text-[#808080] mb-5 h-5">
            <span className="text-2xl ml-1.5 text-[#604ffe]">
              {icons[category]}
            </span>
            {categories[category]}
          </p>
          <p className="flex items-center text-[#808080] mb-5 h-5">
            {sp(price)} تومان
          </p>
          <p className="flex items-center text-[#808080] mb-5 h-5">
            <BiCalendarCheck className="text-2xl ml-1.5 text-[#604ffe]" />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
