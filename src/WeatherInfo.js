import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  const tempMapping = {
    "-34": "cold-3",
    "-33": "cold-3",
    "-32": "cold-3",
    "-31": "cold-3",
    "-30": "cold-3",
    "-29": "cold-3",
    "-28": "cold-3",
    "-27": "cold-3",
    "-26": "cold-3",
    "-25": "cold-3",
    "-24": "cold-3",
    "-23": "cold-3",
    "-22": "cold-3",
    "-21": "cold-3",
    "-20": "cold-3",
    "-19": "cold-3",
    "-18": "cold-3",
    "-17": "cold-3",
    "-16": "cold-3",
    "-15": "cold-3",
    "-14": "cold-2",
    "-13": "cold-2",
    "-12": "cold-2",
    "-11": "cold-2",
    "-10": "cold-2",
    "-9": "cold-2",
    "-8": "cold-2",
    "-7": "cold-2",
    "-6": "cold-1",
    "-5": "cold-1",
    "-4": "cold-1",
    "-3": "cold-1",
    "-2": "cold-1",
    "-1": "cold-1",
    0: "cold-1",
    1: "cold",
    2: "cold",
    3: "cold",
    4: "cold",
    5: "cold",
    6: "warm-1",
    7: "warm-1",
    8: "warm-1",
    9: "warm-2",
    10: "warm-2",
    11: "warm-2",
    12: "warm-3",
    13: "warm-3",
    14: "warm-3",
    15: "warm-3",
    16: "warm-4",
    17: "warm-4",
    18: "warm-4",
    19: "warm-4",
    20: "warm-4",
    21: "warm-5",
    22: "warm-5",
    23: "warm-5",
    24: "warm-5",
    25: "warm-5",
    26: "warm-6",
    27: "warm-6",
    28: "warm-6",
    29: "warm-6",
    30: "warm-6",
    31: "warm-6",
    32: "warm-6",
    33: "warm-6",
    34: "warm-6",
    35: "warm-6",
    36: "warm-6",
    37: "warm-6",
    38: "warm-6",
    39: "warm-6",
    40: "warm-6",
  };
  return (
    <div>
      <div>
        {" "}
        <h1>
          {props.data.city} <small>in {props.data.country}</small>
        </h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li class="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} />
              </div>

              <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity:<strong> {props.data.humidity}%</strong>
              </li>
              <li>
                Wind: <strong>{props.data.wind} km/h</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h4 className={tempMapping[Math.round(props.data.temperature)]}>
          {" "}
          feels like {Math.round(props.data.feel)}°C outside
        </h4>
      </div>
    </div>
  );
}
