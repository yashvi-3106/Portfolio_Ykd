"use client";

import { useEffect, useRef } from "react";
import "./AboutScene.css"; // Import the CSS for animations

function FloatingText({ text, className }) {
  return <span className={`floating-text ${className}`}>{text}</span>;
}

function AnimatedCircle({ className }) {
  return <div className={`animated-circle ${className}`}></div>;
}

export default function AboutScene() {
  return (
    <div className="about-container">
      <AnimatedCircle className="circle1" />
      <AnimatedCircle className="circle2" />
      <AnimatedCircle className="circle3" />

      <FloatingText text="Creative" className="text1" />
      <FloatingText text="Innovative" className="text2" />
      <FloatingText text="Passionate" className="text3" />
    </div>
  );
}
