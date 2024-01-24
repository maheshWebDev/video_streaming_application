import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useLocation } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat ";

const WatchPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const videoId = new URLSearchParams(location.search).get("v");

  return (
    <div className="flex flex-col w-full m-5 p-5">
      <div className="flex w-full">
        {/* Video Player */}
        <div className="flex-shrink-0">
          <iframe
            id="videoPlayer"
            width="750"
            height="355"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* Live Chat */}
        <div className="flex-grow ml-4">
          <LiveChat />
        </div>
      </div>
      {/* Comments */}
      <div className="w-full mt-4">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
