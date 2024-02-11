
import './App.css'
import CCStudent from './ClassComps/CCStudent'
import FCHooksDemo from './FuncComps/FCHooksDemo'

function App() {

  return (
    <>
      <div className="card">
        {/* <CCStudent name="benny" grade={100} /> <br /> */}
        {/* <CCStudent name="benny" grade="100"/> <br />
        <CCStudent name="benny" /> <br /> */}
        <FCHooksDemo />
      </div>
    </>
  )
}

export default App
