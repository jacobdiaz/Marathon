import { useState, useEffect } from "react";
import { getSchedule } from "../lib/firebase";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import WeekCard from "../components/WeekCard";
import SeasonStartCard from "../components/SeasonStartCard";
import * as stats from "../lib/stats"; // Todo to use individual elements
import { Schedule } from "@mui/icons-material";

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
  const [loading, setLoading] = useState(true);
  const [inSeason, setInSeason] = useState();

  // When the page loads check if the season has started
  useEffect(() => {
    stats.currentTrainingWeek >= 1 && stats.currentTrainingWeek <= 18 ? setInSeason(true) : setInSeason(false);
    setLoading(false);
  }, []);

  // If it is the current week dont change the Weekcard
  const handleChangeWeek = (week) => {
    week === currentWeek ? setPreviewWeek(null) : setPreviewWeek(week);
  };

  // Render week cards
  const renderWeekCards = () => {
    // If we are in season render weekcards else render season start card
    return inSeason ? (
      // todo clean this up by throwing in one object in weekcard instead of 3 props
      previewWeek === null ? (
        <WeekCard schedule={schedule} week={stats.currentTrainingWeek - 1} handleChangeWeek={handleChangeWeek} />
      ) : (
        <WeekCard schedule={schedule} week={previewWeek - 1} handleChangeWeek={handleChangeWeek} />
      )
    ) : (
      <div>
        <SeasonStartCard week={previewWeek} schedule={schedule} />
      </div>
    );
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="flex flex-row">
      <SideBar handleChangeWeek={handleChangeWeek} previewWeek={previewWeek} setPreviewWeek={setPreviewWeek} inSeason={inSeason} />
      {/* Margin for side bar... look into doing this cleaner :p */}
      <div className="w-1/6 h-screen pl-1rem"></div>
      <div className="fixed z-0 flex w-full justify-items-end">
        <TopBar />
      </div>
      <div className="w-5/6 h-full p-6 mt-14 bg-shade-purple">
        {/* Render a list of week cards */}
        {renderWeekCards()}
      </div>
    </div>
  );
}
