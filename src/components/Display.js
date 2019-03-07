import React from "react";
import {
  Image,
  CenterDiv,
  P,
  LeftDiv,
  RightDiv,
  SaveButton,
  ListButton,
  ListDiv,
  Heading
} from "./Style";

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
        <CenterDiv>
          <Heading>Weather for {this.props.location.toUpperCase()}</Heading>
          <SaveButton
            onClick={this.props.saveLocation}
            className="fas fa-bookmark"
          />
        </CenterDiv>
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
              <P>{this.props.currentTemp}°c</P>
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
              <P>{this.props.tomorrowTemp}°c</P>
            </div>
          ))}
        </RightDiv>
        <ListDiv>
          <h3>
            Saved Location
            {this.props.savedLocation.map(location => (
              <ListButton onClick={() => this.props.fetchWeather(location)}>
                {location}
              </ListButton>
            ))}
          </h3>
        </ListDiv>
      </CenterDiv>
    );
  }
}
export default Display;
