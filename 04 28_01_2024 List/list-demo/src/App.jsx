import './App.css'
import CCClac from './ClassComps/CCCalc'
import CCPersonsList from './ClassComps/CCPersonsList'

function App() {

  return (
    <>
      <h1>Calc</h1>
      <div className="card">
        <CCPersonsList/>
        <CCClac />
      </div>
    </>
  )
}

export default App
