import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "./hooks/useVideos";
import Footer from "./Footer";

import "./CataloguePage.css";

const CataloguePage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos();

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="container maincontent">
      <SearchBar search={search} className="" />
      <div className="">
        <div className="">
          <div className="mt-3 bd-example">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="container">
            <VideoList
              videos={videos}
              setSelectedVideo={setSelectedVideo}
              className="row"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CataloguePage;

/*
    <div className="container-fluid">
      <SearchBar search={search} className="" />
      <div className="">
        <div className="">
          <div className=" mt-5 bd-example">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="container">
            <VideoList
              videos={videos}
              setSelectedVideo={setSelectedVideo}
              className="row"
            />
          </div>
        </div>
      </div>
    </div>
    */
