import React, { useState } from "react";

export default function LandingPage() {
  return (
    <div>
      <section className="showcase">
        <header>
          <h2 className="logo">VideoChan</h2>
        </header>
        <div className="overlay"></div>
        <div className="text">
          <h2>Connecting You With The Most Popular Videos</h2>
          <h3></h3>
          <p>
            Our mission at VideoChan is to connect you with new creators with
            authenticity, pride and sincerity.
          </p>
          <a href="/search">Explore</a>
          <p>
            Press Explore and search for a term, we'll find the most popular
            video for that term. You may be surprised with what you can find!
          </p>
        </div>
        <ul className="social">
          <li>
            <a href="https://www.facebook.com/">
              <img src="https://i.ibb.co/x7P24fL/facebook.png" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/?lang=en">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
