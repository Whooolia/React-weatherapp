import React from "react";
import { Image, CenterDiv } from "./Style";

// Display class component displays weather data from parent component
class Display extends React.Component {
  render() {
    const date = new Date();
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
        <h2>Weather for {this.props.location}</h2>
        <p>
          {date.getDate()} {months[date.getMonth()]}
        </p>
        {this.props.weatherResult.map(result => (
          <div>
            <p>{result.main}</p>
            <Image
              src={`http://openweathermap.org/img/w/${result.icon}.png`}
              alt="weather icon"
            />
          </div>
        ))}
      </CenterDiv>
    );
  }
}
export default Display;
