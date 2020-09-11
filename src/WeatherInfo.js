import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./BackgroundColor.css";

export default function WeatherInfo(props) {
  let temp = Math.round(props.temp);
  return (
    <div
      className={`${
        temp > -30 && temp <= -15
          ? `cold-3`
          : temp > -15 && temp < -7.5
          ? `cold-2`
          : temp >= -7.5 && temp <= 0
          ? `cold-1`
          : temp > 0 && temp <= 5
          ? `cold`
          : temp > 5 && temp <= 8
          ? `warm-1`
          : temp > 8 && temp <= 11
          ? `warm-2`
          : temp > 11 && temp <= 15
          ? `warm-3`
          : temp > 15 && temp <= 20
          ? `warm-4`
          : temp > 20 && temp <= 25
          ? `warm-5`
          : temp > 25 && temp <= 30
          ? `warm-6`
          : `warm-default`
      }`}
    >
      <h1>
        {props.data.city}, {""}
        {props.data.country}
      </h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
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
  );
}
