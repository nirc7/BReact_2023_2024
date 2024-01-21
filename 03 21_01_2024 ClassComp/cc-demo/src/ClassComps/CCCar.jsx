import { Component } from "react";


export default class CCCar extends Component {
  constructor(props) {
    super(props);

    this.sp = this.props.speed;
    if (150 < this.sp) {
      this.sp += 5;
    }

    this.state = {
      speed: this.props.speed,
      gear: 'manual',
      name:'no name'
    };

  }


  btnIS = () => {
    // this.sp+=10;
    // console.log(this.sp);

    //opt1 - whenever no realation bwtteen the current saatet and previous state
    // this.setState({speed:300, stam:true});
    // console.log('btn' ,  this.state.speed);

    //this.state.gear = 'asdasd' //ERR


    //opt2 - whenever there is a realation bwtteen the current saatet and previous state
    this.setState((prevState) => ({ speed: prevState.speed + 10 }));
  }

  chgName = (event) => {
    this.setState({ name: event.target.value });
  }

  render() {

    console.log('render', this.state.speed);

    return (
      <div style={{
        border: '2px solid orange', borderRadius: 10,
        margin: 20, padding: 20
      }}>
        color={this.props.color} <br />
        speed={this.state.speed} <br />
        model={this.props.model} <br />
        <button onClick={this.btnIS}>IncS</button> <br />
        name= <input type="text" onChange={this.chgName} /> {this.state.name}
      </div>
    );
  }
}