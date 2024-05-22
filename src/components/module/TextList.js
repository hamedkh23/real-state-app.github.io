import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ title, profileData, setProfileData, type }) {
  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };

  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const deleteHandler = (index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  return (
    <div className="mb-10">
      <p className="text-lg mb-1">{title}</p>
      {profileData[type].map((i, index) => (
        <div className="flex my-2.5 mx-0" key={index}>
          <input
            className="w-[300px] border-[1px] border-dashed border-[#304ffe] text-[#808080] rounded-md p-2.5 text-base h-8 ml-2.5 focus:border-[1px] focus:border-solid focus:border-[#304ffe] focus:outline-none"
            type="text"
            value={i}
            onChange={(e) => changeHandler(e, index)}
          />
          <button
            className="m-0 text[#db0505] bg-white border-[1px] border-solid border-[#db0505] flex items-center leading-[10px] text-base rounded-md transition-all ease-in delay-100 cursor-pointer py-1 px-2 hover:scale-105"
            onClick={() => deleteHandler(index)}
          >
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button
        className="border-none bg-[#304ffe] text-white text-base rounded-md transition-all ease-in delay-100 cursor-pointer py-1 px-2 flex mt-5 hover:scale-105"
        onClick={addHandler}
      >
        افزودن
        <MdOutlineLibraryAdd className="mr-1 text-xl" />
      </button>
    </div>
  );
}

export default TextList;
