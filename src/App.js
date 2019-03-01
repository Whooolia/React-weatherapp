import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Display from "./components/Display";

class App extends Component {
  state = {
    location: '',
    items: ''
  }

  handleChange = e => {
    this.setState({location: e.target.value});
  }

  handleSubmit = () => {
    fetch(`api.openweathermap.org/data/2.5/weather?q=${this.state.location}`)
    .then(res => res.json())
      .then(
        result => {
          this.setState({
            items: result
          });
          console.log('result!', this.state.items)
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }


  render() {
    return (
      <div>
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <Display location={this.state.location}/>
      </div>
    );
  }
}

export default App;
