import React from "react";
import SideBarElement from "./SideBarElement";
import * as stats from "../lib/stats";

export default function SideBar() {
  // Grab the current week
  const currentWeek = stats.currentTrainingWeek;

  const renderSideBarItems = () => {
    let items = [];

    console.log(currentWeek);
    if (currentWeek <= 1) {
      for (let i = 1; i < currentWeek + 8; i++) {
        items.push(<SideBarElement week={i} isActive={i === currentWeek} />);
      }
    } else if (currentWeek >= 11) {
      for (let i = 11; i < 19; i++) {
        items.push(<SideBarElement week={i} isActive={i === currentWeek} />);
      }
    } else if (currentWeek > 1 && currentWeek < 11) {
      for (let i = currentWeek - 1; i < currentWeek + 7; i++) {
        items.push(<SideBarElement week={i} isActive={i === currentWeek} />);
      }
    }
    return items;
  };

  return (
    //   todo: change styles to theme
    <div className="w-1/6 h-screen pl-1rem bg-sky-500/100 fixed">{renderSideBarItems()}</div>
  );
}
