"use client"
import React, { useEffect } from "react";

const CalendlyEmbed = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget h-screen"
      data-url={url}
    //   style={{ minHeight: "1500px", width: "100%" }}
    ></div>
  );
};

export default CalendlyEmbed;