import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Display from "./components/Display";
// import API_KEY from "./config";

class App extends Component {
  state = {
    location: "",
    items: ""
  };

  handleChange = e => {
    this.setState({ location: e.target.value });
  };

  handleSubmit = e => {
    console.log("Submited", this.state.location);
    e.preventDefault();
  };

  fetchWeather() {
    fetch(
      "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b18101fe6777a8963c0bed86cfd6b8d7",
      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(result => {
        console.log("result!", result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Search
          handleSubmit={this.fetchWeather}
          handleChange={this.handleChange}
        />
        <Display location={this.state.location} />
      </div>
    );
  }
}

export default App;
