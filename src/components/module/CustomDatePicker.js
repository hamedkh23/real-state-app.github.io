import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function CustomDatePicker({ profileData, setProfileData }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setProfileData({ ...profileData, constructionDate: date });
  };

  return (
    <div className="mb-16">
      <p className="mb-1">تاریخ ساخت</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={profileData.constructionDate}
        onChange={changeHandler}
        calendarPosition="bottom-right"
      />
    </div>
  );
}

export default CustomDatePicker;
