import React from "react";
import { Image, CenterDiv, P, LeftDiv, RightDiv, SaveButton } from "./Style";

// Display class component displays weather data from parent component
class Display extends React.Component {
  render() {
    const date = new Date();
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return (
      <CenterDiv>
        <h2>Weather for {this.props.location.toUpperCase()}</h2>
        <SaveButton
          onClick={this.props.saveLocation}
          className="fas fa-bookmark"
        />
        <i />
        <LeftDiv>
          <P>
            {days[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}
          </P>
          {this.props.currentWeatherResult.map(result => (
            <div>
              <Image
                src={`http://openweathermap.org/img/w/${result.icon}.png`}
                alt="weather icon"
              />
              <P>{result.main}</P>
            </div>
          ))}
        </LeftDiv>
        <RightDiv>
          <P>
            {days[date.getDay() + 1]}, {months[date.getMonth()]}{" "}
            {date.getDate() + 1}
          </P>
          {this.props.tomorrowWeatherResult.map(result => (
            <div>
              <Image
                src={`http://openweathermap.org/img/w/${result.icon}.png`}
                alt="weather icon"
              />
              <P>{result.main}</P>
            </div>
          ))}
        </RightDiv>
        <h2>
          Saved Location :
          {this.props.savedLocation.map(location => (
            <button onClick={() => this.props.fetchWeather(location)}>
              {location}
            </button>
          ))}
        </h2>
      </CenterDiv>
    );
  }
}
export default Display;
