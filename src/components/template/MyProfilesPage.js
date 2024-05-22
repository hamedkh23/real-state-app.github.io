import DashboardCard from "@/module/DashboardCard";

function MyProfilesPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className="bg-red-300/[.5] text-[#db0505] text-xl py-2.5 px-4 rounded-xl">
          هیچ آگهی ثبت نشده است
        </p>
      )}
      {profiles.map((i) => (
        <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default MyProfilesPage;
