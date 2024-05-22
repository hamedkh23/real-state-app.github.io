function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="mb-10">
      <p className="text-lg mb-1">دسته بندی</p>
      <div className="flex">
        <div className="flex items-center justify-between bg-[#304ffe18] text-[#304ffe] ml-8 w-16 py-1 px-1.5 rounded-md cursor-pointer">
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            name="category"
            value="villa"
            id="villa"
            checked={category === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center justify-between bg-[#304ffe18] text-[#304ffe] ml-8 w-16 py-1 px-1.5 rounded-md cursor-pointer">
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center justify-between bg-[#304ffe18] text-[#304ffe] ml-8 w-16 py-1 px-1.5 rounded-md cursor-pointer">
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center justify-between bg-[#304ffe18] text-[#304ffe] ml-8 w-16 py-1 px-1.5 rounded-md cursor-pointer">
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
