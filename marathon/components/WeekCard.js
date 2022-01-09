import React from "react";
import WeekDayItem from "./WeekDayItem";
import * as stats from "../lib/stats"; // Todo to use individual elements

export default function WeekCard({ schedule }) {
  const currentWeekData = schedule[stats.currentTrainingWeek - 1];
  const renderDays = () => {
    let days = [];
    for (let i = 1; i <= 7; i++) {
      days.push(
        <WeekDayItem
          key={i}
          day={i}
          distance={currentWeekData.days[`d${i}`]}
          isToday={i === 0}
          // distance={schedule[stats.currentTrainingWeek - 1].days[i].distance}
        />
      );
    }
    return days;
  };

  return (
    <div>
      <h2>Week {`${stats.currentTrainingWeek}`}</h2>
      <div className="w-full p-6 bg-white rounded">
        <h1>This Week</h1>
        {renderDays()}
      </div>
    </div>
  );
}
