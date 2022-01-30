import React from "react";

export default function Profile({ name, username, light }) {
  const nameClass = light ? "text-sm text-skin-white font-bold" : "text-sm text-skin-black font-bold";
  const usernameClass = light ? "text-xs text-skin-white" : "text-xs text-skin-grey";

  return (
    <div className="flex flex-row items-center">
      {/* Propfile Pic */}
      <div className="w-10 h-10 mr-4 rounded-full bg-shade-orange"></div>

      {/* Profile name and username */}
      <div className="flex-col">
        <p className={nameClass}>{name}</p>
        <p className={usernameClass}>{username}</p>
      </div>
    </div>
  );
}
