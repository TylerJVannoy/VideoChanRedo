import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "./hooks/useVideos";

const CataloguePage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos();

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div>
      <div>
        <div class="container-fluid navbar-style">
          <nav class="navbar navbar-expand-lg custom-navbar">
            <a class="navbar-brand text-white" href="/">
              <i class=""></i>VIDEOCHAN
            </a>

            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="mr-auto"></div>
            </div>
            <SearchBar search={search} className="" />
          </nav>
        </div>
      </div>
      <main>
        <section>
          <div class="row content-background">
            <div class="col-md-9 content-background">
              <VideoDetail video={selectedVideo} />
            </div>
            <div class="col-md-3 sidebar content-background video-list">
              <VideoList
                videos={videos}
                setSelectedVideo={setSelectedVideo}
                className="row"
              />
            </div>
          </div>
        </section>
      </main>
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

/*
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
    */
