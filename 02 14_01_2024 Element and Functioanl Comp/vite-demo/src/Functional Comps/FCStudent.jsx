import EHeader from "../Elements/EHeader";

export default function FCStudent(props) {

  let gr = props.grade;
  if (90 <= gr) {
    gr += 5;
  }

  function btnLearn() {
    gr += 2;
    console.log(gr);
  }



  if (gr < 60) {
    return (
      <div>
        failed!
      </div>
    );
  } else {
    return (
      <div style={{
        border: '2px solid green',
        borderRadius: 20,
        margin: 20,
        padding: 10
      }}>
        {EHeader}
        <h4>Student</h4>
        id={props.id} <br />
        name={props.name} <br />
        grade={gr} <br />
        <button
          onClick={btnLearn}
          className="btn btn-outline-warning">Learn</button>
      </div>
    );
  }
}