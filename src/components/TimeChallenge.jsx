
import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

function TimeChallenge({title,targetTime}){

    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
    const [isActive, setIsActive] = useState(false);

     const timer = useRef();
     const dialog = useRef();

     const restTime = (remainingTime / 1000).toFixed(2);

    function handleStart(){
       setIsActive(true);

    timer.current =   setInterval(() => {
        setRemainingTime(prevTime => {

            if(prevTime <= 10){
                setIsActive(false);
                clearTimeout(timer.current);
                dialog.current.showModal();

                return 0;
            }
            return prevTime - 10
        })
       }, 10);
    }
    function handleStop(){
        setIsActive(false);
        clearInterval(timer.current);
        dialog.current.showModal();
    }

    function reset(){
        setIsActive(false);
        setRemainingTime(targetTime * 1000);

    }

    return <>

       <ResultModal remainingTime={restTime} onReset={reset} ref={dialog} targetTime={targetTime} result={remainingTime === 0 ? "Lost": "Won"} />
         <section className="challenge">
              
              <h2>{title}</h2>

              <p>{remainingTime}</p>

              <p>{targetTime} Second {targetTime > 1 ? "s":""}</p>

              <button onClick={isActive ? handleStop : handleStart}>{isActive ? "Stop": "Start"} Challenge</button>

              <p className={isActive ? "active": ""}>{isActive ? "Timer running..." : "Timer inactive"}</p>

         </section>

        </>
}

export default TimeChallenge;