

export default function FCStudnet(props) {

  let gr = props.grade;
  if (90 < gr) {
    gr += 2;
  }

  function btnLearn() {
    console.log(1);
    gr += 5;
    console.log(gr);
  }


  const chgGender = (e) => {
    console.log(e.target.value);
  }

  return (
    <div style={{
      border: 'blue dashed 3px',
      margin: 15, padding: 20
    }}>
      id={props.id} <br />
      name={props.name} <br />
      grade={gr} <br /><br />
      <button onClick={btnLearn}>Learn</button> <br />
      gender: <input type="text" onChange={chgGender} />
    </div>
  );
}