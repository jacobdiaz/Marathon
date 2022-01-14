import React from "react";
import SideBarElement from "./SideBarElement";
import Profile from "./Profile";
import * as stats from "../lib/stats";

export default function SideBar({ handleChangeWeek }) {

  
  // Grab the current week
  const currentWeek = stats.currentTrainingWeek;
  // Render all sidebar elements based on the current week

  const renderSideBarItems = () => {
    let items = [];

    // Weeks 0-1
    if (currentWeek <= 1) {
      for (let i = 1; i < currentWeek + 8; i++) {
        items.push(<SideBarElement handleChangeWeek={handleChangeWeek} key={i} week={i} isCurrentWeek={i === currentWeek} />);
      }
    }

    // Weeks 1-10
    else if (currentWeek > 1 && currentWeek < 11) {
      for (let i = currentWeek - 1; i < currentWeek + 7; i++) {
        items.push(<SideBarElement handleChangeWeek={handleChangeWeek} key={i} week={i} isCurrentWeek={i === currentWeek} />);
      }
    }

    // Weeks 11-18
    else if (currentWeek >= 11) {
      for (let i = 11; i < 19; i++) {
        items.push(<SideBarElement handleChangeWeek={handleChangeWeek} key={i} week={i} isCurrentWeek={i === currentWeek} />);
      }
    }
    return items;
  };
  return (
    //   todo: change styles to theme
    <div className="px-4 flex flex-col justify-center w-1/6 h-screen pl-1rem bg-primary-navy fixed z-10">
      <div className="flex flex-col items-center w-full">
        <Profile name="Jane Doe" username="@janedoe1992" light />
        <div className="w-full my-4">{renderSideBarItems()}</div>
        <button className="bg-primary-purple p-2 m-2 rounded w-full text-skin-white text-sm">View All Weeks</button>
      </div>
    </div>
  );
}
