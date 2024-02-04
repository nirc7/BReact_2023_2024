import React from 'react';

import BtnMui from '@mui/material/Button';
import PersonAdd from '@mui/icons-material/PersonAdd';
import TextField from '@mui/material/TextField';

export default function FCInputs(props) {

  let myId = null;
  let name;
  let grade;

  const chgId = (e) => {
    myId = e.target.value;
  }

  const btnAddPerson = () => {
    let person = { grade, name };
    props.sendPerson2Parent(person);
  }

  return (
    <div>
      <TextField id="standard-basic" label="Grade"
        variant="standard" color="secondary" margin="normal"
        onChange={(e) => grade = e.target.value} /> <br />

      <TextField id="standard-basic" label="Name"
        variant="standard" color="secondary" margin="normal"
        onChange={(e) => name = e.target.value} /> <br /> <br />

      <BtnMui variant="outlined" color="secondary" endIcon={<PersonAdd />}
        onClick={btnAddPerson} >
        Add Person
      </BtnMui>
    </div>
  )
}
