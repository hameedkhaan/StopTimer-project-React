import Player from './components/Player.jsx';
import TimeChallenge from './components/TimeChallenge.jsx';

function App() {
  
  return (
    <>
      <Player />
      <div id="challenges">
       
       <TimeChallenge title={"Easy"} targetTime={1} />
       <TimeChallenge title={"Medium"} targetTime={5} />
       <TimeChallenge title={"Hard-Core"} targetTime={10} />
       <TimeChallenge title={"Harder"} targetTime={30} />
       <TimeChallenge title={"Insane"} targetTime={60} />
       <TimeChallenge title={"Extreme"} targetTime={90} />

      </div>
    </>
  );
}

export default App;
