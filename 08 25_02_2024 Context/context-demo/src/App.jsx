
import AddHobby from './AddHobby';
import './App.css';
import HobbiesList from './HobbiesList';
import HobbyContextProvider from './HobbyContextProvider';

function App() {

  return (
    <>
      <HobbyContextProvider>
        <AddHobby /> <br />
        <HobbiesList />
      </HobbyContextProvider>
    </>
  )
}

export default App
