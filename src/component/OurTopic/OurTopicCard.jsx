import React from "react";

export default function OurTopicCard({ bg, title, desc }) {
  return (
    <div
      className="topic-card"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="topic-card-desc">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}
