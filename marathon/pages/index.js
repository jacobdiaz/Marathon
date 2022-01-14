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

  // If it is the current week dont change the Weekcard
  const handleChangeWeek = (week) => {
    week === currentWeek ? setPreviewWeek(null) : setPreviewWeek(week);
  };

  return (
    <div className="flex flex-row">
      <SideBar handleChangeWeek={handleChangeWeek} previewWeek={previewWeek} setPreviewWeek={setPreviewWeek} />
      {/* Margin for side bar... look into doing this cleaner :p */}
      <div className="w-1/6 h-screen pl-1rem"></div>
      <div className="w-full fixed flex justify-items-end z-0">
        <TopBar />
      </div>
      <div className="w-5/6 mt-14 bg-shade-purple h-full p-6">
        {
          // todo clean this up by throwing in one object in weekcard instead of 3 props
          previewWeek === null ? (
            <WeekCard schedule={schedule} week={stats.currentTrainingWeek - 1} handleChangeWeek={handleChangeWeek} />
          ) : (
            <WeekCard schedule={schedule} week={previewWeek - 1} handleChangeWeek={handleChangeWeek} />
          )
        }

        <div style={{ height: "2000px" }}></div>
      </div>
    </div>
  );
}
