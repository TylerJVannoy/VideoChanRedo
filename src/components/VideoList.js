import React from "react";
import VideoItem from "../VideoItem";

const VideoList = ({ videos, setSelectedVideo }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        setSelectedVideo={setSelectedVideo}
        key={video.id.videoId}
        video={video}
        className="card"
      />
    );
  });
  return <div className=""></div>;
};

export default VideoList;
