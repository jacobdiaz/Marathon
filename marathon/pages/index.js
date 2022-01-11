import { useState } from "react";
import { getSchedule } from "../lib/firebase";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import WeekCard from "../components/WeekCard";
import * as stats from "../lib/stats"; // Todo to use individual elements

export async function getServerSideProps(context) {
  // Get 18 weeks of schedule data
  const schedule = await getSchedule();
  const startDate = schedule[0];

  // remove first element of schedule array (start date)
  schedule.shift();
  schedule.sort((a, b) => a.week_number - b.week_number);
  // Return as props
  return { props: { schedule, startDate } };
}

export default function Home(props) {
  // Pull out variables from props
  const { schedule, startDate } = props;
  const [currentWeek, setCurrentWeek] = useState(stats.currentTrainingWeek);
  const [previewWeek, setPreviewWeek] = useState(null);
  const [loading, setLoading] = useState(false);

  // Change the weekCard
  const handleChangeWeek = (week) => {
    console.log("CHANGING THE WEEK TO: ", week);
    week === currentWeek ? setPreviewWeek(null) : setPreviewWeek(week);
    console.log("preview week " + previewWeek);
  };

  return (
    <div className="flex flex-row">
      <SideBar handleChangeWeek={handleChangeWeek} />
      {/* Margin for side bar... look into doing this cleaner :p */}
      <div className="w-1/6 h-screen pl-1rem"></div>
      <div className="w-full fixed flex justify-items-end z-0">
        <TopBar />
      </div>
      <div className="w-5/6 mt-14 bg-shade-purple h-full p-6">
        {previewWeek === null ? (
          <WeekCard schedule={schedule} week={stats.currentTrainingWeek - 1} />
        ) : (
          <WeekCard schedule={schedule} week={previewWeek - 1} />
        )}

        <div style={{ height: "2000px" }}></div>
      </div>
    </div>
  );
}
