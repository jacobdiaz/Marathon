import { useState } from "react";
import { firestore, getSchedule } from "../lib/firebase";
import * as stats from "../lib/stats";

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
  };

  return (
    <div>
      <h1> dash </h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={logTest}>Test</button>
    </div>
  );
}
