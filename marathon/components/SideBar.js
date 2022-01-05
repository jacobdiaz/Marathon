import React from "react";
import SideBarElement from "./SideBarElement";
import * as stats from "../lib/stats";

export default function SideBar() {
  // Grab the current week
  const currentWeek = stats.currentTrainingWeek;

  // Render all sidebar elements based on the current week
  const renderSideBarItems = () => {
    let items = [];

    // Weeks 0-1
    if (currentWeek <= 1) {
      for (let i = 1; i < currentWeek + 8; i++) {
        items.push(<SideBarElement week={i} isActive={i === currentWeek} />);
      }
    }

    // Weeks 1-10
    else if (currentWeek > 1 && currentWeek < 11) {
      for (let i = currentWeek - 1; i < currentWeek + 7; i++) {
        items.push(<SideBarElement week={i} isActive={i === currentWeek} />);
      }
    }

    // Weeks 11-18
    else if (currentWeek >= 11) {
      for (let i = 11; i < 19; i++) {
        items.push(<SideBarElement week={i} isActive={i === currentWeek} />);
      }
    }
    return items;
  };



  return (
    //   todo: change styles to theme
    <div className="flex flex-col justify-center w-1/6 h-screen pl-1rem bg-primary-navy fixed">
      <div className="flex flex-col items-center w-full">
        <div className="w-full">{renderSideBarItems()}</div>
        <button className="bg-blue-500 p-2 m-2 rounded w-4/6 text-skin-white">View All Weeks</button>
      </div>
    </div>
  );
}
