import React from "react";

class Display extends React.Component {
  state = {
    items: ""
  };

  render() {
    return <p>{this.props.location}</p>;
  }
}
export default Display;
