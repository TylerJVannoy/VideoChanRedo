import React from "react";
import { htmlDecode } from "./utils/htmlDecode";

import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return null;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const videoLink = `https://www.youtube.com/watch/${video.id.videoId}`;

  return (
    <div align="center">
      <div className="videocontainer">
        <iframe
          src={videoSrc}
          title="video player"
          className="responsive-iframe"
          allowFullScreen
        />
      </div>

      <div className="">
        <h4 className="text-white">{htmlDecode(video.snippet.title)}</h4>
        <p className="text-white">{video.snippet.description}</p>
        <a href={videoLink}>Visit On Youtube</a>
      </div>
    </div>
  );
};

export default VideoDetail;
