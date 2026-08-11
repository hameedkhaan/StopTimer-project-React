import { useRef, useState } from "react";


export default function Player() {

  const [playerName, setPlayerName] = useState(false);
    
  const newName = useRef();

    function changePlayer(){
        setPlayerName(newName.current.value);
    }

  return (

    <section id="player">

      <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>

      <p>
        <input
        ref={newName}
        type="text" />
        <button onClick={changePlayer}>Set Name</button>
      </p>

    </section>

  );
}
