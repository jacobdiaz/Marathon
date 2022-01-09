import React from "react";

export default function WeekDayItem({ day, isToday, distance }) {
  const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return (
    <div className="my-2 py-4 flex w-full justify-between bg-slate-300 ">
      {/* day = 1-7 */}
      <div className=" bg-green-300">
        <p>{weekday[day - 1]}</p>
      </div>
      <div className=" bg-red-400">
        <p className="">{distance === "rest" ? distance : distance + " Miles"}</p>
      </div>
    </div>
  );
}
