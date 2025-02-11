import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="bg-white ba light-purple br-pill h1 overflow-y-hidden">
      <div
        className="bg-light-purple  br-pill h1 w-20"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
