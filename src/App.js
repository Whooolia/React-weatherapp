import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Display from "./components/Display";
import API_KEY from "./config";

class App extends Component {
  state = {
    location: "",
    weatherData: [],
    weatherImg: "",
    isSubmited: false
  };

  // Update location as typed
  handleChange = e => {
    this.setState({ location: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  // This func does API call with the location user typed, and saves fetched data into state as weatherData
  fetchWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        this.state.location
      }&APPID=${API_KEY}`,
      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          weatherData: data.weather,
          weatherImg: data.weather[0].icon,
          isSubmited: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Search
          handleSubmit={this.fetchWeather}
          handleChange={this.handleChange}
        />
        {this.state.isSubmited && (
          <Display
            location={this.state.location}
            weatherResult={this.state.weatherData}
          />
        )}
      </div>
    );
  }
}

export default App;
