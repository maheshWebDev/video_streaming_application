// VideoMetadata.js
import React from "react";

const VideoMetadata = ({
  channelName,
  subscribeCount,
  likeCount,
  dislikeCount,
  description,
}) => {
  return (
    <div className="mt-4 p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center mb-2">
        <span className="font-bold text-lg text-gray-800">{channelName}</span>
        <button className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md">
          Subscribe
        </button>
      </div>
      <div className="flex items-center text-gray-700">
        <span className="mr-4">
          <span className="font-bold">{subscribeCount}</span> subscribers
        </span>
        <span className="mr-4">
          <span className="font-bold">{likeCount}</span> likes
        </span>
        <span>
          <span className="font-bold">{dislikeCount}</span> dislikes
        </span>
      </div>
      <div className="text-gray-700 mt-2">{description}</div>
    </div>
  );
};

export default VideoMetadata;
