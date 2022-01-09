import React from "react";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

export default function TypeLabel({ type }) {
  const renderType = () => {
    let labelClass = "";
    switch (type) {
      case "Easy":
        labelClass = "flex flex-row bg-shade-green text-secondary-green px-4 rounded mr-4";
        break;
      case "Med.":
        labelClass = "flex flex-row bg-shade-orange text-secondary-orange px-4 rounded mr-4";
        break;
      case "Hard":
        labelClass = "flex flex-row bg-shade-red text-secondary-red px-4 rounded mr-4";
        break;
    }

    return (
      <div className={labelClass}>
        <DirectionsRunIcon className="pr-1" />
        <p>{type}</p>
      </div>
    );
  };
  return <div>{renderType()}</div>;
}
