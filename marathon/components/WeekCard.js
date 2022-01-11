import React from "react";
import WeekDayItem from "./WeekDayItem";
import * as stats from "../lib/stats"; // Todo to use individual elements

export default function WeekCard({ schedule, week, handleChangeWeek }) {
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
      <div className="w-full p-6 bg-white rounded">
        {/* Card Header */}
        <div className="flex flex-row w-full justify-between items-end">
          <div className="flex-column">
            <h1>Week {`${week + 1}`}</h1>
            <p className="text-skin-grey">{stats.getWeekDateRange(week + 1)}</p>
          </div>
          <div>
            {
              // todo add onclick feature to change week
              week === stats.currentTrainingWeek - 1 ? (
                <button
                  onClick={() => {
                    handleChangeWeek(week + 2);
                  }}
                >
                  See next week
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleChangeWeek(stats.currentTrainingWeek);
                  }}
                >
                  Back to current week
                </button>
              )
            }
          </div>
        </div>
        {/* Days */}
        {renderDays()}
      </div>
    </div>
  );
}
