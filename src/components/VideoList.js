import React from "react";
import VideoItem from "../VideoItem";

const VideoList = ({ videos, setSelectedVideo }) => {
  const renderedList = videos.map(video => {
    return (
      <div className="video-item">
        <VideoItem
          setSelectedVideo={setSelectedVideo}
          key={video.id.videoId}
          video={video}
          className="card"
        />
      </div>
    );
  });
  return <div className="video-card">{renderedList}</div>;
};

export default VideoList;
