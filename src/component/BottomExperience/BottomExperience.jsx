import React, { useEffect } from "react";
import "./BottomExperience.scss";
import BottomExperienceImg from "./../../assets/image/bottom_experience.jpg";
import Animate from "../Animate/Animate";

export default function BottomExperience() {
  return (
    <div
      style={{ backgroundImage: `url(${BottomExperienceImg})` }}
      className="bottom-experience"
    >
      <Animate dir={"anim_right"} name={"bottom"}>
        <h1>
          Experience the power <br /> of Seven Wireless!
        </h1>
        <button>Shop online</button>
      </Animate>
    </div>
  );
}
