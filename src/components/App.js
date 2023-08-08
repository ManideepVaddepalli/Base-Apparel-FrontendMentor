import React from "react";
import Topsection from "./Topsection";
import Picture from "./Picture";
import Desktoppic from "./Desktoppic";
import Bottomtext from "./Bottomtext";
import Email from "./Email";

export default function App() {
  return (
    <div className="desktop-total-content">
      <div className="total-content">
        <Topsection />
        <Picture />
        <Bottomtext />
        <Email />
      </div>
      <Desktoppic />
    </div>
  );
}
