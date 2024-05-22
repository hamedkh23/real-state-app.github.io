import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categories } from "@/constants/strings";

function Sidebar() {
  return (
    <div className="flex flex-col">
      <p className="flex text-xl font-normal">
        <HiFilter className="ml-2.5 text-2xl text-[#304ffe]" />
        دسته بندی
      </p>
      <Link className="text-[#808080] m-1" href="/buy-residential">
        همه
      </Link>
      {Object.keys(categories).map((i) => (
        <Link
          className="text-[#808080] m-1"
          key={i}
          href={{
            pathname: "/buy-residential",
            query: { category: i },
          }}
        >
          {categories[i]}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
