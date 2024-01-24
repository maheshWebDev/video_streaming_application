// VideoContainer.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await axios.get(YOUTUBE_VIDEOS_API);
      setVideos(response?.data?.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
        {videos.map((video, index) => (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
