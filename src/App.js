import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import useVideos from "./components/hooks/useVideos";
import LandingPage from "./components/LandingPage";
import CataloguePage from "./components/CataloguePage";

import "./App.css";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos();

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/search" component={CataloguePage} search={search} />
    </Switch>
  );
};

export default App;
