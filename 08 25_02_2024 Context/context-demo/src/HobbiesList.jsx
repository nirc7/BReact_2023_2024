import { useContext } from "react";
import { HobbyContext } from "./HobbyContextProvider";
import HobbyData from "./HobbyData";

export default function HobbiesList(props) {
  const { hobbies } = useContext(HobbyContext);


  let hobbiesListSTR = hobbies.map(hob =>
    <HobbyData key={hob.id} hob={hob}/>
  );

  return (
    <div>
      {hobbiesListSTR}
    </div>
  )
}
