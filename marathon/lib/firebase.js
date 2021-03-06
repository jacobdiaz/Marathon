import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8MWpmYi4tFGCCBFkbsaLLBqpqnDHqGe0",
  authDomain: "marathon-e0c63.firebaseapp.com",
  projectId: "marathon-e0c63",
  storageBucket: "marathon-e0c63.appspot.com",
  messagingSenderId: "61308074953",
  appId: "1:61308074953:web:8a489e8e899515b0c40618",
  measurementId: "G-LJRN4LKNRM",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();

// References
export const schedulesRef = firestore.collection("schedules");
export const noviceref = schedulesRef.doc("novice");
export const marathonDate = schedulesRef.doc("marthon_date");

// Getters
export async function getSchedule() {
  const weeks = [];
  await firestore
    .collection("schedule")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        weeks.push(doc.data());
      });
    });
  return weeks;
}
