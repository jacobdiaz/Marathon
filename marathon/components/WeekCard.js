import React from "react";
import WeekDayItem from "./WeekDayItem";
import * as stats from "../lib/stats"; // Todo to use individual elements

export default function WeekCard({ schedule, week, handleChangeWeek, notSeason }) {
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
      <h2>Schedule</h2>
      <div className="w-full mt-4 p-6 bg-white rounded">
        {/* Card Header */}
        <div className="flex flex-row w-full justify-between items-end mb-4 ">
          <div className="flex-column">
            <h1>Week {`${week + 1}`}</h1>
            <p className="text-skin-grey">{stats.getWeekDateRange(week + 1)}</p>
          </div>
          <div>
            {
              // Dont render current week btn if were not in season
              !notSeason ? (
                week === stats.currentTrainingWeek - 1 ? (
                  <button
                    className="bg-primary-purple text-white rounded px-2 py-1 text-sm"
                    onClick={() => {
                      handleChangeWeek(week + 2);
                    }}
                  >
                    See next week
                  </button>
                ) : (
                  <button
                    className="bg-primary-purple text-white rounded px-2 py-1 text-sm"
                    onClick={() => {
                      handleChangeWeek(stats.currentTrainingWeek);
                    }}
                  >
                    Back to current week
                  </button>
                )
              ) : null
            }
          </div>
        </div>
        {/* Days */}
        {renderDays()}
      </div>
    </div>
  );
}
