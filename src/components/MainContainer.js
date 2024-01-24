// MainContainer.js
import React from "react";
import ButtonList from "./ButtonList";
import VideoConatiner from "./VideoConatiner";
const MainContainer = () => {
  return (
    <div className="flex-1 p-4">
      <ButtonList />
      <VideoConatiner />
    </div>
  );
};

export default MainContainer;
