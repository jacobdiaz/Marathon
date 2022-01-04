import React from "react";
import SideBarElement from "./SideBarElement";
export default function SideBar() {
  // Fetch the current Week Number

  return (
    <div className="w-1/6 h-screen pl-1rem bg-sky-500/100 fixed">
      <SideBarElement week="1" isActive={false} />
      <SideBarElement week="2" isActive={false} />
      <SideBarElement week="3" isActive={false} />
      <SideBarElement week="4" isActive={true} />
      <SideBarElement week="5" isActive={false} />
      <SideBarElement week="6" isActive={false} />
      <SideBarElement week="7" isActive={false} />
      <SideBarElement week="8" isActive={false} />
    </div>
  );
}
