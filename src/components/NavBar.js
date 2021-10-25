import React from "react";

import SearchBar from "./SearchBar";
import "./Navbar.css";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand mylogo mx-auto" href="/">
            VideoChan
          </a>
        </div>
      </nav>
    </div>
  );
}
