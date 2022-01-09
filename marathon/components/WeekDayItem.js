import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import TypeLabel from "./TypeLabel";

export default function WeekDayItem({ day, isToday, distance }) {
  const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const isTodayClass = isToday ? "" : "opacity-50 "; // Add a opacity to all items not today

  // Type Label (Easy Med Hard)
  const renderType = (distance) => {
    if (distance > 0 && distance <= 6) {
      return <TypeLabel type="Easy" />;
    }
    if (distance > 7 && distance <= 13) {
      return <TypeLabel type="Med." />;
    }
    if (distance > 13) {
      return <TypeLabel type="Hard" />;
    }
    if ("rest") {
      return (
        <div className={`flex flex-row bg-shade-blue text-secondary-blue px-4 rounded mr-4`}>
          <LocalHotelIcon className="pr-1" />
          <p>Rest</p>
        </div>
      );
    }
    if ("cross") {
      return (
        <div className={`flex flex-row bg-shade-purple text-secondary-purple px-4 rounded mr-4`}>
          <p>Cross</p>
        </div>
      );
    }
  };

  return (
    <div className={`my-2 py-4 flex w-full justify-between border-b-2 border-gray-100 ${isTodayClass}`}>
      {/* day = 1-7 */}
      <div>
        <p className="text-med font-bold">
          {weekday[day - 1]} {isToday ? "- Today" : ""}
        </p>
      </div>
      <div className=" flex flex-row ">
        <p className="pr-4 text-med font-bold">{distance === "rest" ? "" : distance + " Miles"}</p>
        {renderType(distance)}
        <button>
          <MoreVertIcon />
        </button>
      </div>
    </div>
  );
}
