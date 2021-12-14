import React from "react";

<section className="row">
  <a name="work"></a>
  <div className="column">
    Concert Tracker
    <div
      id="bigCard"
      onclick="location.href='https://samadams412.github.io/concertTracker/';"
      style="cursor: pointer"
    >
      <img
        className="project"
        src="./assets/concertTracker.png"
        alt="live concert"
      />
    </div>
    <a
      href="https://github.com/samadams412/concertTracker"
      className="gitLinked"
      style=""
    >
      Github Repo
    </a>
  </div>
  <div className="column">
    Weather Dashboard
    <div
      className="card"
      onclick="location.href='https://djay8400.github.io/weather-dashboard-david-jay/';"
      style="cursor: pointer"
    >
      <img
        className="project"
        src="./assets/weather-dashboard.png"
        alt="man smiling"
      />
    </div>
    <a
      href="https://github.com/Djay8400/weather-dashboard-david-jay"
      className="gitLinked"
      style=""
    >
      Github Repo
    </a>
  </div>
  <div className="column">
    FanPass
    <div
      className="card"
      onclick="location.href='https://fan-pass.herokuapp.com/';"
      style="cursor: pointer"
    >
      <img className="project" src="./assets/FanPass.png" alt="man smiling" />
    </div>
    <a
      href="https://github.com/samadams412/fanPass"
      className="gitLinked"
      style=""
    >
      Github Repo
    </a>
  </div>
</section>;

export default Hello;
