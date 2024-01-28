import React, { Component } from 'react'

export default class CCPersonsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { id: 1, name: 'avi' },
        { id: 2, name: 'benny' },
      ]
    };
  }

  btnAddPerson = () => {
    let newPersons = [...this.state.persons,
    { id: this.state.id, name: this.state.name }];
    console.log(newPersons);
    this.setState({ persons: newPersons });
    console.log('addperson', this.state.persons);
  }

  render() {

    console.log('render', this.state.persons);

    let personsListStr = this.state.persons.map(per =>
      <a href="#" className="list-group-item" key={per.id}>{per.id + " hello " + per.name}</a>);

    return (
      <div>
        ID : <input type="text" onChange={(e) => this.setState({ id: e.target.value })} /> <br />
        NAME : <input type="text" onChange={(e) => this.setState({ name: e.target.value })} /> <br /> <br />
        <button onClick={this.btnAddPerson} >+</button> <br /> <br />

        <p style={{ fontWeight: "bold", margin: 10 }}>perosns list:</p>
        <div className="list-group" style={{ width: "80%" }}>{personsListStr}</div>
      </div>
    )
  }
}
