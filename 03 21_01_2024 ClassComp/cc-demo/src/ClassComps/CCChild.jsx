import { Component } from "react";

export default class CCChild extends Component {

  btnSend2Parent = () => {
    this.props.sendData(7);
  }

  render() {
    return (
      <>
        <button onClick={this.btnSend2Parent}>send2Parent</button>
      </>
    );
  }
}