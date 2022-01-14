import React from "react";

export default function SideBarElement({ week, isCurrentWeek, handleChangeWeek }) {
  // Styles
  const containerClass = isCurrentWeek
    ? "w-full flex py-2 items-center cursor-pointer justify-between text-skin-white hover:font-bold "
    : "w-full flex py-2 items-center cursor-pointer justify-between opacity-40 text-skin-white hover:opacity-100";
  const iconClass = "bg-white w-4 h-4 mr-4";

  return (
    <button
      className={containerClass}
      onClick={() => {
        handleChangeWeek(week);
      }}
    >
      <div className={iconClass}></div>
      <p className="">{`Week ${week}`}</p>
    </button>
  );
}
