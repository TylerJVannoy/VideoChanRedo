import React from "react";
import { htmlDecode } from "./components/utils/htmlDecode";

import "./VideoItem.css";

const VideoItem = ({ video, setSelectedVideo }) => {
  return (
    <div onClick={() => setSelectedVideo(video)} className="card-block">
      <img
        className="card-img-top img-fluid img"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="card-body">
        <div className="card-text">{htmlDecode(video.snippet.title)}</div>
      </div>
    </div>
  );
};

export default VideoItem;
