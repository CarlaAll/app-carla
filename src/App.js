import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App ">
      <div className="container">
        <Weather defaultCity="Lisbon" />
      </div>
      <footer>
        <a
          href="https://github.com/CarlaAll/app-carla"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-Sourced on GitHub
        </a>{" "}
        {"by "}
        <a
          href="https://www.linkedin.com/in/carla-allenbach-735b6511a"
          target="_blank"
          rel="noopener noreferrer"
        >
          Carla Allenbach
        </a>{" "}
        and is hosted on{" "}
        <a
          href="https://wheater-app-carla-react.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
