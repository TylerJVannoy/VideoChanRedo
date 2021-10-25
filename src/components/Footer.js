import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer
      className=" text-center text-white navbar fixed-bottom"
      align="center"
    >
      <div className="text-center p-3">
        VideoChan © 2021 Copyright:
        <a className="text-white" href="www.github.com">
          Tyler Vannoy
        </a>
      </div>
    </footer>
  );
}
