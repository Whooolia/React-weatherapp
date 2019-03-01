import React from "react";

// Search includes two elements.
// Fist, text area which user can type the location.
// Second, when user submits and it triggers API call

class Search extends React.Component {
  render() {
    return (
      <div>
        <input
          type="type"
          placeholder="Type the location"
          value={this.props.state}
          onChange={this.props.handleChange}
        />
        <input type="submit" onClick={this.props.handleSubmit} />
      </div>
    );
  }
}
export default Search;
