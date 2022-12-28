import React from "react";
import "./Widgets.css";
function Widgets() {
  return (
    <div className="widgets">
      {/* iframe is used to get a web page inside the web page */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/es4x5R-rV9s?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        // autoplay="1"
        allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IAx7Kx_BwsY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Widgets;
