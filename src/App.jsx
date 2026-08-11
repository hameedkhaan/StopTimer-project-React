import Player from './components/Player.jsx';
import TimeChallenge from './components/TimeChallenge.jsx';

function App() {
  
  return (
    <>
      <Player />
      <div id="challenges">
       
       <TimeChallenge title={"Biggner"} targetTime={1} />
       <TimeChallenge title={"Pro"} targetTime={5} />
       <TimeChallenge title={"Advnaced"} targetTime={10} />
       <TimeChallenge title={"Level-A"} targetTime={30} />
       <TimeChallenge title={"Level-B"} targetTime={60} />
       <TimeChallenge title={"Level-C"} targetTime={90} />

      </div>
    </>
  );
}

export default App;
