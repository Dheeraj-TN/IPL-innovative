import React from "react";
import "./Story.css";
import { Avatar } from "@mui/material";
function Story({ image, profile, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story__avatar" src={profile} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
