import React from "react";

class Display extends React.Component {
    state={
        items: ''
    }

//   componentDidMount() {
//     console.log('Inside didMount!, ');
   
//   }

  render(){
      return(<p>{this.state.items}</p>)
  }
}
export default Display;
