import React from "react";
import { Input, Button, DefaultDiv, Title, RightDiv } from "./Style";
// import Button from "./Style";

// Search includes two elements.
// Fist, text area which user can type the location.
// Second, when user submits and it triggers API call

class Search extends React.Component {
  render() {
    return (
      <DefaultDiv>
        <Title>Weather App</Title>

        <Input
          type="type"
          placeholder="Type the location"
          value={this.props.location}
          onChange={this.props.handleChange}
        />
        <Button
          type="submit"
          onClick={() => this.props.fetchWeather(this.props.location)}
        >
          Get Weather
        </Button>
      </DefaultDiv>
    );
  }
}
export default Search;

// if this.props.fetchWeather(argu) it evcuates function right away, so should give () => to evacuate when it needs.
