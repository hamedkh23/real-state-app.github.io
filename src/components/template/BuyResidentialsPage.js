import Sidebar from "@/module/Sidebar";
import Card from "@/module/Card";

function BuyResidentialsPage({ data }) {
  return (
    <div className="flex justify-between mt-20">
      <div className="flex flex-col items-center h-fit py-8 px-4 rounded-xl shadow-[0px_4px_15px] shadow-[#304ffe4a] ml-10 w-56">
        <Sidebar />
      </div>
      <div className="w-full flex flex-wrap justify-between">
        {data.length ? null : (
          <p className="bg-red-300/[.5] text-[#db0505] text-xl py-2.5 px-4 rounded-xl h-12">
            هیچ آگهی ثبت نشده است
          </p>
        )}
        {data.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
}

export default BuyResidentialsPage;
