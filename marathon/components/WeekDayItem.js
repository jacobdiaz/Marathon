import React from "react";

export default function WeekDayItem({ day, isToday, distance }) {
    
    return (
    <div>
      <p>{day}</p>
      {isToday && <p>Today</p>}
      <p>{distance}</p>
    </div>
  );
}
