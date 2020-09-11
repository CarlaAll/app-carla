import React from "react";
import "./BackgroundColor.css";

export default function BackgroundColor(props) {
  let temp = Math.round(props.temperature);
  if (temp > -30 && temp <= -15) {
    return <div className="cold-3"></div>;
  } else if (temp > -15 && temp < -7.5) {
    return <div className="cold-2"></div>;
  } else if (temp >= -7.5 && temp <= 0) {
    return <div className="cold-1"></div>;
  } else if (temp > 0 && temp <= 5) {
    return <div className="cold"></div>;
  } else if (temp > 5 && temp <= 8) {
    return <div className="warm-1"></div>;
  } else if (temp > 8 && temp <= 11) {
    return <div className="warm-2"></div>;
  } else if (temp > 11 && temp <= 15) {
    return <div className="warm-3"></div>;
  } else if (temp > 15 && temp <= 20) {
    return <div className="warm-4"></div>;
  } else if (temp > 20 && temp <= 25) {
    return <div className="warm-5"></div>;
  } else if (temp > 25 && temp <= 30) {
    return <div className="warm-6"></div>;
  } else {
    return <div className="warm-default"></div>;
  }
}
