import React from "react";
import Profile from "./Profile";

export default function TopBar() {
  return (
    <div className="z-10 flex flex-row justify-end w-full px-4 py-2 bg-white h-15">
      <Profile name="Jane Doe" username="@janedoe1992" />
    </div>
  );
}
