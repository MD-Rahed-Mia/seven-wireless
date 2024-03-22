import React from "react";
import "./BottomExperience.scss";
import BottomExperienceImg from "./../../assets/image/bottom_experience.jpg";

export default function BottomExperience() {
  return (
    <div
      style={{ backgroundImage: `url(${BottomExperienceImg})` }}
      className="bottom-experience"
    >
      <h1>Experience the power <br /> of Seven Wireless!</h1>
      <button>Shop online</button>
    </div>
  );
}
