import React from "react";
import * as stats from "../lib/stats"; // Todo to use individual elements
import WeekCard from "./WeekCard";

// TODO: Add style to this card
export default function SeasonStartCard({ schedule, week }) {
  console.log("week", week);
  console.log("scheud", schedule);

  // If for some reason we load without a week in props just render the first week
  const loadWeek = week != null ? week - 1 : 0;

  return (
    <div>
      <h2>Season Start</h2>
      <div className="items-center justify-center w-full p-6 mt-4 mb-16 bg-white rounded">
        <p>Season starts on {`${stats.formatDate(stats.startDate)}`}</p>
      </div>
      {/* Render Week Cards */}
      <WeekCard schedule={schedule} week={loadWeek} notSeason />
    </div>
  );
}
