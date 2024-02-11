import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CCStudent extends Component {

  constructor(props) {
    super(props);

   // this.state={};
  }

  chgTxt = (e) => {
    this.setState({ [e.target.name]: e.target.value },
      ()=>{
        //code runs after the state chakged and laos after the render called
        console.log('afer state was chaglked');
      });
    console.log('line after the setstate');
  }


  

  render() {
    console.log('render');
    return (
      <div>CCStudent
        name = {this.props.name} <br />
        grade={this.props.grade} <br />
        <input type="text" name="txt1" onChange={this.chgTxt} /> <br />
        <input type="text" name="txt2" onChange={this.chgTxt} /> <br />
        txt1= {this.state ?  this.state.txt1 : '...'}
      </div>
    )
  }
}

CCStudent.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired
};


