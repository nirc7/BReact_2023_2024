import './App.css'
import CCCar from './ClassComps/CCCar';
import EHeader from './Elements/EHeader';
import FCStudnet from './FuncComps/FCStudent';
import CCChild from './ClassComps/CCChild';

function App() {

  function getData(data) {
    console.log('in parent', data);
  }

  return (
    <>
      {EHeader}
      <h1>Ruppin</h1>
      <div className="card">

        <CCChild sendData={getData} /> <br />

        <CCCar speed={200} model="BMW" color="red" /> <br />
        <CCCar speed={130} model="KIA" color="black" /> <br />

        <FCStudnet id={1} name="avi" grade={100} />
        <FCStudnet id={2} name="benny" grade={80} />

      </div>
    </>
  )
}

export default App
