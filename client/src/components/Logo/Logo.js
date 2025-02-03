import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./icons8-brain-connections-96.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma3 mt3">
      <Tilt
        className="Tilt br2 shadow-2"
        tiltMaxAngleX="50"
        tiltMaxAngleY="50"
        style={{ height: 150, width: 150, borderRadius: 80 }}
      >
        <img src={brain} alt="brain" style={{ paddingTop: "30px" }} />
      </Tilt>
    </div>
  );
};

export default Logo;
