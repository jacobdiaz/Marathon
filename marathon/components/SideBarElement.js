import { WeekendSharp } from "@mui/icons-material";
import React from "react";

export default function SideBarElement({ week, isCurrentWeek, isPreviewWeek, handleChangeWeek, setPreviewWeek }) {
  // Styles
  const currentWeekClass = isCurrentWeek
    ? "w-full flex py-2 items-center cursor-pointer justify-between text-skin-white font-bold "
    : "w-full flex py-2 items-center cursor-pointer justify-between opacity-40 text-skin-white hover:opacity-100";
  const iconClass = "bg-white w-4 h-4 mr-4";

  const selectedWeekClass = isPreviewWeek
    ? "w-full flex py-2 items-center cursor-pointer justify-between text-skin-white opacity-70 font-bold"
    : "w-full flex py-2 items-center cursor-pointer justify-between opacity-40 text-skin-white hover:opacity-100";

  const elementClass = isCurrentWeek ? currentWeekClass : selectedWeekClass;
  return (
    <button
      id={isPreviewWeek ? `sbe-${week}` : ""}
      className={elementClass}
      onClick={() => {
        handleChangeWeek(week);
        setPreviewWeek(week);
        console.log(week);
      }}
    >
      <div className={iconClass}></div>
      <p className="">{`Week ${week}`}</p>
    </button>
  );
}
