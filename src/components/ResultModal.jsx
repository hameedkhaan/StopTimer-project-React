
import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal({result,targetTime, onReset, remainingTime},ref){

    return <dialog  ref={ref} className="result-modal">
          
          <h2>you {result}</h2>

          <p>The target time was <strong>{targetTime} Seconds</strong></p>

          <p>The timer stoped at <strong>{remainingTime} Seconds</strong></p>

           <form method="dialog" onSubmit={onReset}>

            <button>Close</button>
           </form>
    </dialog>

})
export default ResultModal;