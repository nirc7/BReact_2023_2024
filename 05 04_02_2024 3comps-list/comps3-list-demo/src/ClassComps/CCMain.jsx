import React, { Component } from 'react'
import FCInputs from '../FuncComps/FCInputs'
import FCPL from '../FuncComps/FCPL';

const personsInit = [
  { id: 1, name: 'avi', grade: 100 },
  { id: 2, name: 'benny', grade: 99 }];


export default class CCMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: personsInit,
      counter: personsInit.length
    };
  }


  getPersonFromChild = (person) => {
    console.log(person);

    let newCounter = this.state.counter + 1;
    person.id = newCounter;

    let newPersons = [...this.state.persons, person];
    console.log(newPersons);
    this.setState({
      persons: newPersons,
      counter: newCounter
    });
  }

  render() {
    return (
      <div>CCMain
        <FCInputs sendPerson2Parent={this.getPersonFromChild} /> <br />
        <FCPL persons={this.state.persons} />
      </div>
    )
  }
}
