import React from "react";
import { Input, Button, DefaultDiv, Title } from "./Style";
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
          value={this.props.state}
          onChange={this.props.handleChange}
        />
        <Button type="submit" onClick={this.props.handleSubmit}>
          Get Weather
        </Button>
      </DefaultDiv>
    );
  }
}
export default Search;
