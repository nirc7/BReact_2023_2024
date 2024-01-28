import { Component } from "react";


export default class CCClac extends Component {
  constructor(props) {
    super(props);

    this.list = ["avi", "benny", "charlie"];
  }

  chgNum1 = (e) => {
    this.setState({ num1: Number(e.target.value) });
  }

  btnAdd = () => {
    this.setState({ res: this.state.num1 + this.state.num2 });
  }

  render() {

    let listStr = this.list.map((name, index) =>
      <a href="#" className="list-group-item" key={index}>{index + ": hello " + name + "!"}</a>
    )

    return (
      <>
        NUM1 : <input type="text" onChange={this.chgNum1} /> <br />
        NUM2 : <input type="text" onChange={(e) => this.setState({ num2: Number(e.target.value) })} /> <br /> <br />
        <button onClick={this.btnAdd} >+</button> <br /> <br />
        result= {this.state != null ? this.state.res : 'no res yet...'} <br />
        result= {this.state && this.state.res}

        <p style={{ fontWeight: "bold", margin: 10 }}>names list:</p>
        <div className="list-group" style={{ width: "80%" }}>{listStr}</div>


      </>
    );
  }
}