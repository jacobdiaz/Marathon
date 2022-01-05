import { useState } from "react";
import { firestore, getSchedule } from "../lib/firebase";
import SideBar from "../components/SideBar";
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
      {/* <h1> dash </h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={logTest}>Test</button> */}
      <div className="w-1/6 h-screen pl-1rem"></div>
      <div className="w-5/6 bg-shade-purple h-full">
        <h1>Hello</h1>
        <div style={{ height: "2000px" }}></div>
      </div>
    </div>
  );
}
