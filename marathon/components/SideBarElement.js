import React from "react";

export default function SideBarElement({ week, isActive }) {
  // Todo: change styles to theme
  // Styles
  const containerClass = isActive
    ? "w-full flex py-2 px-4 items-center cursor-pointer justify-between text-skin-white hover:bg-slate-600/80 "
    : "w-full flex py-2 px-4 items-center cursor-pointer justify-between opacity-40 text-skin-white hover:bg-slate-600/80 ";
  const iconClass = "bg-white w-4 h-4 mr-4";

  // Todo: add logic to switch weeks
  return (
    <div className={containerClass}>
      <div className={iconClass}></div>
      <p className="">{`Week ${week}`}</p>
    </div>
  );
}
