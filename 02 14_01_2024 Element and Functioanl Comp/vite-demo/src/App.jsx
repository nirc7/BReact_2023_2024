import viteLogo from '/vite.svg'
import './App.css'
import EHeader from './Elements/EHeader';
import FCStudent from './Functional Comps/FCStudent';

function App() {
  return (
    <div>
      {EHeader}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>FC</h1>
      <div className="card">
        <FCStudent id="1" name="avi" grade={77} />
        <FCStudent id={"2"} name="benny" grade={99} />
        <FCStudent id="3" name="charlie" grade={50} />

        <div class="card" style={{width: "18rem;"}}>
          <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

      </div>
    </div>
  )
}

export default App
