import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { firebase, firestore, getSchedule, schedulesRef } from "../lib/firebase";

export default function Home(props) {
  async function getMarkers() {
    const markers = [];
    await firestore
      .collection("schedule")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          markers.push(doc.data());
        });
      });
    setSchedule(markers);
  }

  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMarkers();
  }, []);

  // // !Populate our DB
  function populate() {
    const ref = firestore.collection("schedule");
    const { weeks } = novice;
    for (let i = 0; i < 18; i++) {
      let data = weeks[`week${i + 1}`];
      ref.doc(`week${i + 1}`).set(weeks[`week${i + 1}`]);
    }
  }

  const printSchedule = () => {
    console.log(schedule);
  };
  return (
    <div className={styles.container}>
      <h1> dash </h1>
      <button onClick={printSchedule}>Populate</button>
    </div>
  );
}
