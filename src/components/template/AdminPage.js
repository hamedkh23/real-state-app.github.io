import AdminCard from "@/module/AdminCard";

function AdminPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className="rounded-xl py-2.5 px-4 text-xl text-[#db0505] bg-red-300/[.5]">
          هیچ آگهی در انتظار تاییدی وجود ندارد
        </p>
      )}
      {profiles.map((i) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default AdminPage;
