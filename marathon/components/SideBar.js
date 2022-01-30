import React from "react";
import SideBarElement from "./SideBarElement";
import Profile from "./Profile";
import * as stats from "../lib/stats";
import { useState, useEffect } from "react";
export default function SideBar({ inSeason, handleChangeWeek, previewWeek, setPreviewWeek }) {
  // Have a state to keep track of clicked on week items
  // const [previewWeek, setPreviewWeek] = useState(null);
  const [weekHtml, setWeekHtml] = useState([]);

  // Listen for any changes to previewWeek

  // Grab the current week
  const currentWeek = stats.currentTrainingWeek;

  // Render all sidebar elements based on the current week
  const renderSideBarItems = () => {
    let items = [];

    // If we are in season
    if (inSeason) {
      if (currentWeek <= 1) {
        // Weeks 0-1
        for (let i = 1; i < currentWeek + 8; i++) {
          items.push(
            <SideBarElement
              handleChangeWeek={handleChangeWeek}
              key={i}
              week={i}
              isCurrentWeek={i === currentWeek}
              isPreviewWeek={i === previewWeek}
              setPreviewWeek={setPreviewWeek}
            />
          );
        }
      }

      // Weeks 1-10
      else if (currentWeek > 1 && currentWeek < 11) {
        for (let i = currentWeek - 1; i < currentWeek + 7; i++) {
          items.push(
            <SideBarElement
              handleChangeWeek={handleChangeWeek}
              key={i}
              week={i}
              isCurrentWeek={i === currentWeek}
              isPreviewWeek={i === previewWeek}
              setPreviewWeek={setPreviewWeek}
            />
          );
        }
      }

      // Weeks 11-18
      else if (currentWeek >= 11) {
        for (let i = 11; i < 19; i++) {
          items.push(
            <SideBarElement
              handleChangeWeek={handleChangeWeek}
              key={i}
              week={i}
              isCurrentWeek={i === currentWeek}
              isPreviewWeek={i === previewWeek}
              setPreviewWeek={setPreviewWeek}
            />
          );
        }
      }
    }

    if (!inSeason) {
      for (let i = 1; i < 8; i++) {
        items.push(
          <SideBarElement
            handleChangeWeek={handleChangeWeek}
            key={i}
            week={i}
            isPreviewWeek={i === previewWeek}
            setPreviewWeek={setPreviewWeek}
          />
        );
      }
    }
    setWeekHtml(items);
  };

  useEffect(() => {
    console.log("SideBar.js: useEffect previewWeek: ", previewWeek);
    return renderSideBarItems();
  }, [previewWeek]);

  return (
    //   todo: change styles to theme
    <div className="fixed z-10 flex flex-col justify-center w-1/6 h-screen px-4 pl-1rem bg-primary-navy">
      <div className="flex flex-col items-center w-full">
        <Profile name="Jane Doe" username="@janedoe1992" light />
        <div className="w-full my-4">{weekHtml}</div>
        <button className="w-full p-2 m-2 text-sm rounded bg-primary-purple text-skin-white">View All Weeks</button>
      </div>
    </div>
  );
}
