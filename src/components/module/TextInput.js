import { p2e } from "@/utils/replaceNumber";

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };

  return (
    <div>
      <p className="text-lg mb-1">{title}</p>
      {textarea ? (
        <textarea
          className="w-[300px] border-[1px] border-dashed border-[#304ffe] text-[#808080] rounded-md p-2.5 text-base h-[100px] focus:border-[1px] focus:border-solid focus:border-[#304ffe] outline-none"
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          className="w-[300px] border-[1px] border-dashed border-[#304ffe] text-[#808080] rounded-md p-2.5 text-base h-10 focus:border-[1px] focus:border-solid focus:border-[#304ffe] outline-none"
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}

export default TextInput;
