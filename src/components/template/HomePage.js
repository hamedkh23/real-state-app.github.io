import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import CategoryCard from "@/module/CategoryCard";
import { categories, cities, services } from "@/constants/strings";

function HomePage() {
  return (
    <div>
      <div className="flex justify-center items-center rounded-xl p-5 my-24 mx-0 max-lg:flex-col-reverse">
        <div className="w-full text-center text-[#304ffe]">
          <h1 className="font-bold text-5xl mb-8 max-sm:text-4xl">
            سامانه خرید و اجاره ملک
          </h1>
          <ul className="list-none flex justify-center flex-wrap">
            {services.map((i) => (
              <li
                className="flex items-center w-20 m-2.5 bg-[#bbdefb] py-1.5 px-2.5 rounded-md"
                key={i}
              >
                <FiCircle />
                <span className="font-normal mr-1.5 h-5">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between flex-wrap my-12 mx-0 max-sm:justify-center">
        {Object.keys(categories).map((i) => (
          <CategoryCard key={i} title={categories[i]} name={i} />
        ))}
      </div>
      <div className="my-24 mx-0">
        <h3 className="font-semibold text-4xl text-center text-[#304ffe]">
          شهر های پر بازدید
        </h3>
        <ul className="flex justify-between flex-wrap mt-12 list-none max-sm:justify-center">
          {cities.map((i) => (
            <li
              className="bg-[#bbdefb] text-[#304ffe] text-xl w-64 my-2.5 mx-0 flex justify-center items-center p-2.5 rounded-xl"
              key={i}
            >
              <FaCity />
              <span className="h-8 mr-4 font-normal">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
