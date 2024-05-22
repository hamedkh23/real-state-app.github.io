function DashboardPage({ createdAt }) {
  return (
    <div>
      <h3 className="text-[#304ffe] font-normal text-2xl mb-5">سلام 👋</h3>
      <p className="text-[#808080]">
        آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند
      </p>
      <div className="mt-24 flex bg-[#304ffe18] w-fit py-1.5 px-2.5 rounded-md">
        <p className="text-[#808080] m-0 font-normal ml-2.5">تاریخ عضویت:</p>
        <span className="text-[#304ffe]">
          {new Date(createdAt).toLocaleDateString("fa-IR")}
        </span>
      </div>
    </div>
  );
}

export default DashboardPage;
