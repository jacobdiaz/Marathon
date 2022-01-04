import React from "react";

export default function SideBarElement({ week, isActive }) {
  // Todo: change styles to theme
  // Styles
  const containerClass = isActive
    ? "flex flex-row p-2 items-center cursor-pointer hover:bg-slate-600/80"
    : "flex flex-row p-2 items-center cursor-pointer opacity-30 hover:bg-slate-600/80";
  const iconClass = "bg-white w-4 h-4 mr-4";

  // Todo: add logic to switch weeks
  return (
    <div className={containerClass}>
      <div className={iconClass}></div>
      <p>{`Week ${week}`}</p>
    </div>
  );
}
