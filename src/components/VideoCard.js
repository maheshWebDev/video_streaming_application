// VideoCard.js
import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics, contentDetails } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  const { duration } = contentDetails;

  return (
    <div className="flex flex-col mb-6 border-b pb-4 shadow-md rounded-md overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative">
        <img
          alt="thumbnail"
          src={thumbnails.medium.url}
          className="w-full h-48 object-cover rounded-t-md"
        />
      </div>
      <div className="p-4">
        <h2 className="text-base font-medium line-clamp-2">{title}</h2>
        <p className="text-gray-600 text-sm mt-1">{channelTitle}</p>
        <div className="flex items-center mt-2">
          <p className="text-gray-600 text-sm">{viewCount} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
