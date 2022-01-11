import React from "react";
import WeekDayItem from "./WeekDayItem";
import * as stats from "../lib/stats"; // Todo to use individual elements

export default function WeekCard({ schedule, week }) {
  const currentWeekData = schedule[week];
  const renderDays = () => {
    let days = [];
    for (let i = 1; i <= 7; i++) {
      days.push(
        <WeekDayItem
          key={i}
          day={i}
          distance={currentWeekData.days[`d${i}`]}
          isToday={i >= stats.currentTrainingDay && week === stats.currentTrainingWeek - 1}
          isFutureWeek={week + 1 > stats.currentTrainingWeek}
        />
      );
    }
    return days;
  };

  return (
    <div>
      <h2>This Week</h2>
      <p>{stats.addWeeks(week + 1)}</p>
      <div className="w-full p-6 bg-white rounded">
        <h1>Week {`${week + 1}`}</h1>
        {renderDays()}
      </div>
    </div>
  );
}
