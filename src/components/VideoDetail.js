import React from "react";
import { htmlDecode } from "./utils/htmlDecode";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <section className="anothershowcase">
          <header>
            <h2 className="logo"></h2>
          </header>
          <div className="overlay"></div>
          <div className="text">
            <h2 className="search-text">Start your search now</h2>
            <h3></h3>
          </div>
        </section>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

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
        <h4 className="text-white text-start">
          {htmlDecode(video.snippet.title)}
        </h4>
        <p className="text-white text-start">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
