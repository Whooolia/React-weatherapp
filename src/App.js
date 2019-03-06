import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Display from "./components/Display";
import API_KEY from "./config";

class App extends Component {
  state = {
    location: "",
    currentWeatherData: [],
    firstWeather: [],
    isSubmited: false,
    savedLocation: JSON.parse(localStorage.getItem("location")) || []
  };

  // Update location as typed
  handleChange = e => {
    this.setState({ location: e.target.value });
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  // };

  // This func does API call with the location user typed, and saves fetched data into state as weatherData
  fetchWeather = location => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${API_KEY}`,
      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          currentWeatherData: data.list[0].weather,
          firstWeather: data.list[5].weather,
          currentWeatherImg: data.list[0].weather.icon,
          isSubmited: true,
          location
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Using localStorage to save location like bookmark for user
  saveLocation = () => {
    const updateLocation = Array.from(
      new Set([...this.state.savedLocation, this.state.location])
    );
    this.setState({
      savedLocation: updateLocation
    });
    localStorage.setItem("location", JSON.stringify(updateLocation));
  };

  // Set is an handle that can't take an duplicated element!!!

  // getLocation = () => {
  //   localStorage.getItem("location");
  // };

  render() {
    return (
      <div>
        <Search
          location={this.state.location}
          fetchWeather={this.fetchWeather}
          handleChange={this.handleChange}
        />
        {this.state.isSubmited && (
          <Display
            location={this.state.location}
            saveLocation={this.saveLocation}
            savedLocation={this.state.savedLocation}
            currentWeatherResult={this.state.currentWeatherData}
            tomorrowWeatherResult={this.state.firstWeather}
            fetchWeather={this.fetchWeather}
          />
        )}
      </div>
    );
  }
}

export default App;
