import React from "react";
import Profile from "./Profile";

export default function TopBar() {
  return (
    <div className="h-15 w-full py-2 px-4 bg-white flex flex-row justify-end">
      <Profile name="Jane Doe" username="@janedoe1992" />
    </div>
  );
}
