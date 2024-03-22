import React from "react";
import Heroimg from "./../../assets/image/heroimg.jpg";
import "./heroNav.scss";

import { SlMusicTone } from "react-icons/sl";

import { FiAlignCenter } from "react-icons/fi";
import Navbar from "./Navbar";

export default function HeroNav() {
  return (
    <div
      style={{
        backgroundImage: `url(${Heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="nav"
    >
      <div className="nav-bottom">
        <h1>
          Wireless Technology <br /> of Tomorrow
        </h1>

        <div className="nav-bottom-desc">
          <div>
            <FiAlignCenter className="hero-icon" />{" "}
            <span>Transparency Mode</span>
          </div>
          <div>
            <SlMusicTone className="hero-icon" />
            <span>Active Noise cancelling</span>
          </div>
        </div>
      </div>
    </div>
  );
}
