import React from "react";
import "./PageTitle.scss";

export default function PageTitle({ title }) {
  return (
    <div className="page-title">
      <h1>{title}</h1>
    </div>
  );
}
