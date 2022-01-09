import { useState } from "react";
import { getSchedule } from "../lib/firebase";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import * as stats from "../lib/stats"; // Todo to use individual elements

export async function getServerSideProps(context) {
  // Get 18 weeks of schedule data
  const schedule = await getSchedule();
  const startDate = schedule[0];

  // remove first element of schedule array (start date)
  schedule.shift();

  // Return as props
  return { props: { schedule, startDate } };
}

export default function Home(props) {
  // Pull out variables from props
  const { schedule, startDate } = props;
  const [loading, setLoading] = useState(false);

  const logTest = () => {
    console.log(schedule);
    console.log(startDate["start_date"]);
    console.log(stats.percentCompleted);
    console.log(stats.currentTrainingWeek);
  };

  return (
    <div className="flex flex-row">
      <SideBar />
      {/* Margin for side bar... look into doing this cleaner :p */}
      <div className="w-1/6 h-screen pl-1rem"></div>
      <div className="w-full fixed flex justify-items-end z-0">
        <TopBar />
      </div>
      <div className="w-5/6 mt-14 bg-shade-purple h-full p-6">
        <h2>Week 2</h2>
        <div className="w-full p-6 bg-white rounded">
          <h1>This Week</h1>
        </div>
        <div style={{ height: "2000px" }}></div>
      </div>
    </div>
  );
}
